const router = require('express').Router();
const { Project } = require('../../models');
const { ensureAuthenticated } = require('../../middleware/ensureAuthenticated');

// router.get('/', async (req, res) => {
//   try {
//     const userData = await Project.findAll({});

//     const users = userData.map((project) => project.get({ plain: true }));

//     if (!userData) {
//       res.status(404).json(userData);
//     }
//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/profile', async (req, res) => {
//   try {
//     const profile = await Project.findAll({});
//     if (!profile) {
//       return res.status(404).json({ msg: 'Profile not found' });
//     }

//     const projects = profile.map((project) => project.get({ plain: true }));

//     res.render('profile', {
//       projects,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/api/projects/profile');
//     return;
//   } else {
//     res.render('login');
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const category = await Project.findByPk(req.params.id);
//     if (!category) {
//       return res.status(404).json({ msg: 'Project not found' });
//     }

//     const projects = category.get({ plain: true });

//     res.render('project', {
//       projects,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/profile', ensureAuthenticated, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
