// API routes

module.exports = function(app, fs) {

    let notesDB = require("../db/db.json");
    const dataPath = "./db/db.json";
    // read file
    app.get("/api/notes", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
        });
    });

    app.post("/api/notes", (req, res) => {
        
        var newNote = req.body;
        var id = (notesDB.length).toString();
        newNote.id = id;

        notesDB.push(newNote);
        
        // res.json(true);
        res.json(newNote);

        console.log(notesDB);

        fs.writeFileSync("./db/db.json", JSON.stringify(notesDB, null, 2));
        res.json(notesDB);
    });

    app.delete("/api/notes/:id", (req, res) => {

    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;
    
    savedNotes = savedNotes.filter(currentNote => {
        return currentNote.id != noteID;
    })
    
    for (var i = 0; i < savedNotes.length; i++) {
        currentNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes, null, 2));
    res.json(savedNotes);
    })
}