// dependencies
var express = require("express");

// create Express server
var app = express();
var PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// start server
app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
});