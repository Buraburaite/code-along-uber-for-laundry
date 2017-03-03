var Router = require('express').Router;
var authRoutes = Router();

authRoutes.get('/signup', function(req, res, next) {
  res.render('auth/signup');
});

authRoutes.get('/login', function(req, res, next) {
  res.render('auth/login');
});

module.exports = authRoutes;
