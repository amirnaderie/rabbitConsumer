const express = require('express');
//const menus = require('../routes/menus');
const recieve = require('../routes/recieve');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/recieve', recieve);
  app.use(error);
}