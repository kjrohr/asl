//------------------------------------------
// Sets the express module to the express variable
const express = require('express');
// Sets the router function in express to the router variable
const router = express.Router();
const path = require('path');
//------------------------------------------

//------------------------------------------
// This is the content of the route?
//router.get('/', (req, res, next) => {
//  next();
//  res.send('<h1>Hello World</h1>');
//})
//------------------------------------------

//------------------------------------------
// Sending an html file
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/../views/index.html'));
})
//------------------------------------------
//------------------------------------------
// This exports router
module.exports = router;
//------------------------------------------
