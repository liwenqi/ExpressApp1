﻿import express = require('express');
import routes = require('./routes/index');
//import my = require("./routes/my");
import http = require('http');
import path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

import stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

var data = { dir: 'kunhony', param: 'archive' };
var strJson = JSON.stringify(data);
console.log(strJson);
app.get('/hello/*', function (req, res) {
    console.log(req.query.name);
    console.log(req.query.email);
    res.send(strJson);
});

//修改
app.get('/helloworld', routes.helloworld);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
