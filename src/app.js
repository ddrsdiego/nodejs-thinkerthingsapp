'use strict';
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const indexRoute = require('../src/routes/index-route');

app.use('/', indexRoute);

module.exports = app;