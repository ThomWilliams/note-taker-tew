
// Requires express
const express = require("express");
const app = express();

// Defines PORT
const PORT = 5000;

// Sets Up middleware and parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Sets Up Routes 
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

app.listen(PORT, () => 
console.log (`App listening on PORT: ${PORT}`));