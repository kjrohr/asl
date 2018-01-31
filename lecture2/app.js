const express = require('express');
const app = express();


//------------------------------------------
// This is setting up the route and how to display
const index = require('./routes/index');
app.use('/', index);
//------------------------------------------

module.exports = app;
