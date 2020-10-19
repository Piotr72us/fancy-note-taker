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

// app.use(express.static(__dirname + '/public'));

// app.use(express.static(path.join(__dirname, 'public/assets/css/styles.css')));
// app.use('/js', express.static(__dirname, + '/js'));
// app.use('/notes', express.static(__dirname, + 'public/assets/css/styles.css'));

require("./routes/apiRoutes.js")(app, fs);
require("./routes/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
});