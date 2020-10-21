// var notes = require("./db/db.json");

// API routes
// app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//     // res.sendFile(path.join(__dirname, "/db/db.json"));
// });
// const fs = require("fs");
// const notesDB = require("../db/db.json")

module.exports = function(app, fs) {
    let notesDB = require("../db/db.json")
    // const fs = require("fs");
// const userRoutes = (app, fs) => {
    // variables
    const dataPath = "./db/db.json";
    // READ
    app.get("/api/notes", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
            throw err;
        }
        // return res.json(data);
        res.send(JSON.parse(data));
        });
    });
//   };


    app.post("/api/notes", (req, res) => {
        
        var newNote = req.body;
        var id = (notesDB.length).toString();
        newNote.id = id;
        console.log(newNote);

        notesDB.push(newNote);
        
        // when to use res.json(true)???
        // res.json(true);
        res.json(newNote);

        console.log(notesDB);

        fs.writeFileSync("./db/db.json", JSON.stringify(notesDB, null, 2));
        res.json(notesDB);
    
    });

    app.get("/api/notes/:id", function(req, res) {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(savedNotes[Number(req.params.id)]);
    });

    app.delete("/api/notes/:id", (req, res) => {

    //     var deleteNote = req.body;
    //     console.log(deleteNote);
    //     for (var i = 0; i < notesDB.length; i++ ){
    //         if (deleteNote === notesDB[i].id) {
    //             notesDB.splice(i, 1)
    //         }
    // }
    // fs.writeFileSync("./db/db.json", JSON.stringify(notesDB));
    // res.json(notesDB);

    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;
    console.log(`Deleting note with ID ${noteID}`);
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })
    
    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes, null, 2));
    res.json(savedNotes);



    })

//   module.exports = userRoutes;
}