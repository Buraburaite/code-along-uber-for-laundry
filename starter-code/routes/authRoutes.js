var Router = require('express').Router;
var authRoutes = express.Router();

/* GET home page. */
authRoutes.get('/login', function(req, res, next) {
  res.render('auth/login');
});

module.exports = authRoutes;
