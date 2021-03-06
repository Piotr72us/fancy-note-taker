// API routes

// uuid npm package for creating unique IDs
const { v4: uuidv4 } = require('uuid');


const fs = require("fs");
let notesDB = require("../db/db.json");

module.exports = function(app) {

    // read file
    app.get("/api/notes", (req, res) => {
        res.json(notesDB);
    });

    app.post("/api/notes", (req, res) => {
        
        var newNote = req.body;

        //initial method of creating unique IDs
            // var id = (notesDB.length).toString();
            // newNote.id = id;

        // uuid creates unique IDs
        var id = uuidv4();
        newNote.id = id;

        notesDB.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(notesDB, null, 2), function() {
            res.json(notesDB);
        });
    });

    app.delete("/api/notes/:id", (req, res) => {

    let savedNotes2 = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    
    savedNotes2 = savedNotes2.filter(currentNote => {
        return currentNote.id != noteID;
    })
    
    for (var i = 0; i < savedNotes2.length; i++) {
        savedNotes2[i].id = i.toString();
    }

    notesDB = savedNotes2
    fs.writeFile("./db/db.json", JSON.stringify(savedNotes2, null, 2), function() {
        res.json(savedNotes2);
    });  
    })
}