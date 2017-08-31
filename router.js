const express = require('express');
let HomeController = require('./controllers/home');

module.exports = function(app) {
  let homeRouter = express.Router();

  homeRouter.get('/', HomeController.home);
  homeRouter.get('/create', HomeController.create);
  homeRouter.post('/create-gabble', HomeController.createGabble);
  homeRouter.get('/gabble/:id', HomeController.detail);

  app.use('/', homeRouter);
};
