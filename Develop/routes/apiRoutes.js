const storeNote = require("../db/store");
const router = require("express").Router();

// GETS all notes from the database
router.get("/notes", (req, res) => {
    storeNote.getNotes().then((notes) => {
        return res.json(notes);
    })
    .catch((err) => 
    res.status(500).json(err));
});


// POSTS all notes from the database
router.post("/notes", (req, res) => {
    storeNote.addNote(req.body).then((note) => 
    res.json(note))
    .catch((err) => 
    res.status(500).json(err));
});

module.exports = router;
