const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Asset System V1 - Add Asset");
});

app.listen(3001, ()=>{
    console.log("Running V1");
});