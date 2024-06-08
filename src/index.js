const express = require("express");
const userRouter = require("./routes/userRouters");
const noteRouter = require("./routes/noteRouters");
const app=express();
const mongoose= require("mongoose");

app.use(express.json())
app.use("/user",userRouter)
app.use("/note",noteRouter)


mongoose.connect("mongodb+srv://sagor23:abc45678@cluster0.pjzksry.mongodb.net/").then(()=>
{
    app.listen(5000,()=>{
        console.log("Server started on port no, 5000");
    });
}).catch((error)=>{
    console.log(error)
})

