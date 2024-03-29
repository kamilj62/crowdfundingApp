const ensureAuthenticated = (req, res, next) => {
  if (req.session.user_id) {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, redirect to the login page or send an error response
    //res.status(401).json({ message: 'Unauthorized. Please log in.' });
    res.redirect('/login');
  }
};

module.exports = {
  ensureAuthenticated,
};
