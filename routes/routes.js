var express = require('express');
var routes = express.Router();
var controllers = require('../controllers');

// home page routes
routes.get('/',controllers.homeController.index);

// company routes
routes.get('/company',controllers.companyController.index);
routes.get('/company/add',controllers.companyController.add);
routes.post('/company/add',controllers.companyController.save);
routes.get('/company/edit/(:id)',controllers.companyController.edit);
routes.post('/company/edit/(:id)',controllers.companyController.update);
routes.get('/company/delete/(:id)',controllers.companyController.delete);

module.exports = routes;