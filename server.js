const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use('/', routes);

app.listen(8080, function () {
    console.log("App started at port 8080!!");
});