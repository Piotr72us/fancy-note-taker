// var notes = require("./db/db.json");

// API routes
// app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//     // res.sendFile(path.join(__dirname, "/db/db.json"));
// });
// const fs = require("fs");


module.exports = function(app, fs) {

    // const fs = require("fs");
// const userRoutes = (app, fs) => {
    // variables
    const dataPath = './db/db.json';

    // READ
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
            throw err;
        }

        
        // return res.json(data);
        res.send(JSON.parse(data));
        });
    });
//   };

//   module.exports = userRoutes;
}