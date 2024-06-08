const express = require("express")
const noteRouter = express.Router();

noteRouter.get("/",(req,res)=>{
    res.send("Note get")
});

noteRouter.post("/",(req,res)=>{
    res.send("Note post")
});

module.exports=noteRouter;