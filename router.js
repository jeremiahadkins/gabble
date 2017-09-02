const express = require('express');
let HomeController = require('./controllers/home');
let AuthController = require('./controllers/auth');

module.exports = function(app, passport) {
  let homeRouter = express.Router();
  let authRouter = express.Router();

  homeRouter.get('/', HomeController.home);
  homeRouter.get('/create', HomeController.create);
  homeRouter.post('/create-gabble', HomeController.createGabble);
  homeRouter.get('/gabble/:id', HomeController.detail);

  authRouter.get('/signup', AuthController.signup);
  
  authRouter.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/signup'
  }));

  authRouter.get('/login', AuthController.login);

  app.use('/', homeRouter);
  app.use('/auth', authRouter);
};
