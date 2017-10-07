const jamRoutes = require('./jam_routes');

module.exports = function (app, db) {
  jamRoutes(app, db);
  // Other route groups could go here, in the future
};