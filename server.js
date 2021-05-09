
// Requires express
const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const app = express();

// Defines PORT
const PORT = 5080;

// Sets Up middleware and parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Sets Up Routes 
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

app.listen(process.env.PORT || 5080, () => 
console.log (`App listening on PORT: ${PORT}`));