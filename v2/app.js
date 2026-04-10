const express = require("express");
const app = express();

app.use(express.json());

// Store assets in memory
let assets = [];

// Home route
app.get("/", (req, res) => {
    res.send("Asset System V2 - Add & View Assets");
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

// IMPORTANT (Docker port)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("V2 running on port " + PORT);
});