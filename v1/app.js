const express = require("express");
const app = express();

// Home route (Add Asset)
app.get("/", (req, res) => {
    res.send("Add Asset - v1");
});

// FIXED PORT (important)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("v1 running on port " + PORT);
});