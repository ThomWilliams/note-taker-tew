const util = require("util");
const fs = require("fs");
const uuid = require("uuid/dist/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



module.exports = store;

