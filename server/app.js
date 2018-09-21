'use strict';

const express = require('express');
const app = express();

const api = require('./api');

app.use(api);

module.exports = app;