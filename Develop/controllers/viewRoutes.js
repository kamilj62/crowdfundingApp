const router = require('express').Router();
const { Project } = require('../models');
const { ensureAuthenticated } = require('../middleware/ensureAuthenticated');

router.get('/', async (req, res) => {
  try {
    const userData = await Project.findAll({});

    const users = userData.map((project) => project.get({ plain: true }));

    if (!userData) {
      res.status(404).json(userData);
    }
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } else {
    res.render('login');
  }
});

router.get('/profile', ensureAuthenticated, async (req, res) => {
  try {
    const profile = await Project.findAll({});
    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' });
    }

    const projects = profile.map((project) => project.get({ plain: true }));

    res.render('profile', {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/projects/:id', async (req, res) => {
  try {
    const category = await Project.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const projects = category.get({ plain: true });

    res.render('project', {
      projects,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
