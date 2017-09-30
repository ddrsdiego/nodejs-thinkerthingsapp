'use strict';
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://admin:admin@ds040167.mlab.com:40167/thinker-things-db', {
    useMongoClient: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Models
const firstContact = require('../src/models/first-contact/first-contact');

//Routes
const indexRoute = require('../src/routes/index-route');
const firstContactRoute = require('../src/routes/first-contact-route');

app.use('/v1/', indexRoute);
app.use('/v1/first-contacts', firstContactRoute);

module.exports = app;