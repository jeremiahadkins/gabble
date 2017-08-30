const express = require('express');
let HomeController = require('./controllers/home');

module.exports = function(app) {
  let homeRouter = express.Router();
  
  homeRouter.get('/', HomeController.home);
  
  app.use('/', homeRouter);
};
