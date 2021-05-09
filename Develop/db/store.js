const util = require("util");
const fs = require("fs");
const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

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

    addNote(note) {
        const { title, text } = note;

        // Throws Error in the events of no text being entered
        if (!title || !text) {
            throw new Error("Please enter text for the Titles and Text fields");
        }

        // gives an ID number to each new ID
        const newNote = { title, text, id: uuid() };

        return this.getNotes().then((notes) => 
        [... notes, newNote]).then((updatedNotes) =>
        this.write(updatedNotes)).then(() =>
        newNote);


    }


}

module.exports = new store;

