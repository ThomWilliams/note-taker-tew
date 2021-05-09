
// Requires express
const express = require("express");
const apiRoutes = require("../Develop/routes/apiRoutes");
const htmlRoutes = require("../Develop/routes/htmlRoutes");
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

app.listen(PORT, () => 
console.log (`App listening on PORT: ${PORT}`));