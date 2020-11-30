var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require(path.join(__dirname, 'models', 'index'));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
models.sequelize.sync({force:true}).then(function () {
    console.log('Nice! Database looks fine');
  }).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
  });
module.exports = app;
