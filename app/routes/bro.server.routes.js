module.exports = function(app) {

  var usersController = require('../controllers/bros.server.controller');

  app.route('/me').get(usersController.index);
};
