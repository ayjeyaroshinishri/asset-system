const express = require("express");
const app = express();

let assets = ["Laptop", "Chair"];

app.get("/", (req, res) => {
    res.send("Delete Asset - v3");
});

app.get("/view", (req, res) => {
    res.json(assets);
});

app.delete("/delete/:id", (req, res) => {
    assets.splice(req.params.id, 1);
    res.send("Asset Deleted");
});

app.listen(3003, () => {
    console.log("v3 running on port 3003");
});