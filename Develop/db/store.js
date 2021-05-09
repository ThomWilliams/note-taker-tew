const util = require("util");
const fs = require("fs");
const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class store {

    // reads the typed note as json
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    // writes the note as JSON and stringfies
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }


    // Gets the note input data, parses and returns as an array
    getNotes() {
        return this.read()
        .then((notes) => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
        }
        return parsedNotes;
    });
    }

    // Adds the note data to left hand column
    addNote(note) {
        const { title, text } = note;

        // Throws Error in the events of no text being entered
        if (!title || !text) {
            throw new Error("Please enter text for the Titles and Text fields");
        }

        // gives an ID number to each new message with the uuid package
        const newNote = { title, text, id: uuid };

        // gets all submitted notes, adds the new note, writes an updated list of notes
        return this.getNotes().then((notes) => 
        [... notes, newNote]).then((updatedNotes) =>
        this.write(updatedNotes)).then(() =>
        newNote);

    }

    removeNote(id) {
        return this.getNotes().then((notes) => 
        notes.filter((note) => 
        note.id !== id)).then((filteredNotes) => 
        this.write(filteredNotes));
    
    }



}

module.exports = new store;

