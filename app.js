const express = require("express");
const app = express();

app.use(express.json());

let assets = ["Laptop","Mouse","Keyboard"];

app.get("/", (req,res)=>{
    res.send("✅ Asset System V3 - Delete Asset");
});

app.get("/view",(req,res)=>{
    res.json(assets);
});

app.delete("/delete/:id",(req,res)=>{
    assets.splice(req.params.id,1);
    res.send("Asset Deleted");
});

app.listen(3003, ()=>{
    console.log("V3 running on port 3003");
});