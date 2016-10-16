var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes.js');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app, express);

app.listen(1337);
console.log('Listening on Port 1337');

module.exports = app;