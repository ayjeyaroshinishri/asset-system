const express = require("express");
const app = express();

let assets = ["Laptop","Chair"];

app.get("/", (req,res)=>{
    res.send("Asset System V2 - View Assets");
});

app.get("/view",(req,res)=>{
    res.json(assets);
});

app.listen(3002, ()=>{
    console.log("Running V2");
});