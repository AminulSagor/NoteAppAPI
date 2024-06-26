const express = require("express");
const userRouter = require("./routes/userRouters");
const noteRouter = require("./routes/noteRouters");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config({ path: './src/.env' });

const app=express();
const mongoose= require("mongoose");


app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
app.use("/note",noteRouter);


app.get("/",(req,res) =>{
    res.send("Note API from Sagor");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL).then(()=>
{
    app.listen(PORT,()=>{
        console.log("Server started on port no, "+ PORT);
    });
}).catch((error)=>{
    console.log(error)
});

