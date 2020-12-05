// Dependencies
var express = require("express");



// Create Express server
var app = express();
var PORT = process.env.PORT || 3000;

// var notes = require("./db/db.json");

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
});