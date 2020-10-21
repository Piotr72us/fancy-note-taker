// Dependencies
var express = require("express");
var path = require("path");

const fs = require("fs");

// Create Express server
var app = express();
var PORT = process.env.PORT || 3000;

// var notes = require("./db/db.json");

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app, fs);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
});