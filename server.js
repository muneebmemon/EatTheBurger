// requiring modules
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var router = require('./controllers/burgersController');

// setting port
var PORT = process.env.PORT || 3000;

// initializing express app
var app = express();

// setting to serve static content from the "public" directory
app.use(express.static(path.join(__dirname , 'public')));

// setting up body-parser with json content
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting up handlebar as template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Intializing router
app.use(router);

// listening to port
app.listen(PORT, function() {
  console.log(`Listening to port ${PORT}. Waiting for connections....`);
});
