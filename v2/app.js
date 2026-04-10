const express = require("express");
const app = express();

let assets = ["Laptop", "Chair"];

app.get("/", (req, res) => {
    res.send("View Assets - v2");
});

app.get("/view", (req, res) => {
    res.json(assets);
});

app.listen(3002, () => {
    console.log("v2 running on port 3002");
});