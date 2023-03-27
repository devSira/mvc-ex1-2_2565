var express = require('express');
var routes = express.Router();
var controllers = require('../controllers');

// home page routes
routes.get('/',controllers.homeController.index);
routes.get('/add',controllers.homeController.add);
routes.get('/sell/:id/:price',controllers.homeController.sell);
routes.get('/update/:totalPrice/:id',controllers.homeController.update);
routes.get('/delete/:id',controllers.homeController.delete);


module.exports = routes;