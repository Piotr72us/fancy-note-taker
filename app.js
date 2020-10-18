// Dependencies
var express = require("express");
var path = require("path");

// Create Express server
var app = express();
var PORT = 3000;

// var notes_db =

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// API routes
app.get("/api/notes", function(req, res) {
    return res.json(notes_db);
});


app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
});