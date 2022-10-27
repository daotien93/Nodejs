const express = require("express");
// Create an express
const app = express();
const path = require("path");
const hbs = require("hbs");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname,"/views"));
app.get("/", (req, res) => { 
    res.render("index", {    
        author: "Arash Arora", 
    });
});
// Start port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

