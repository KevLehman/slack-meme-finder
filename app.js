const express = require('express');
const app = express();
const api = require('./api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

api(app);

module.exports = app;
