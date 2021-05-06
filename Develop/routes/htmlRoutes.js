const path = require("path");
const router = require("express").Router();


// All routes respond to index.html...
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ... except this which responds just to notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


module.exports = router;