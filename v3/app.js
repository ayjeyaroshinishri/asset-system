const express = require("express");
const app = express();

app.use(express.json());

// Store assets
let assets = [];

// Home route
app.get("/", (req, res) => {
    res.send("Asset System V3 - Add, View & Delete Assets");
});

// Add asset
app.post("/add", (req, res) => {
    assets.push(req.body);
    res.send("Asset Added Successfully");
});

// View assets
app.get("/view", (req, res) => {
    res.json(assets);
});

// Delete asset (by index)
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    if (assets[id]) {
        assets.splice(id, 1);
        res.send("Asset Deleted Successfully");
    } else {
        res.send("Invalid ID");
    }
});

// IMPORTANT (Docker port)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("V3 running on port " + PORT);
});