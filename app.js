const express = require('express');

const app = express();
const api = require('./api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view-engine', 'ejs');
api(app);

module.exports = app;
