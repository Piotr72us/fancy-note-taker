// var notes = require("./db/db.json");

// API routes
// app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//     // res.sendFile(path.join(__dirname, "/db/db.json"));
// });
// const fs = require("fs");
// const notesDB = require("../db/db.json")

module.exports = function(app, fs) {
    const notesDB = require("../db/db.json")
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
        var id = notesDB.length;
        newNote.id = id;
        console.log(newNote);

        notesDB.push(newNote)
        res.json(true);
        // res.json(newNote);
        console.log(notesDB);

        fs.readFileSync(dataPath)
    
    });

//   module.exports = userRoutes;
}