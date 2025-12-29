const express = require('express')
const { mongoose } = require('mongoose')
const user = require('./model')
const app=express()

const cors = require('cors')
const corsOptions={
    origin:["http://localhost:5173"]
}
app.use(express.json())
app.use(cors(corsOptions))



app.post("/home",(req,res)=>{
    const newUser=new user({name:req.body[0],password:req.body[1],victory:0})
    newUser.save().then(()=>console.log("User Created")).catch(err=>console.log(err))
})

let data=""
app.post("/home2",(req,res)=>{
    if(req.body){
        user.find({name:req.body[0],password:req.body[1]})
        .then(user=>
            data=user,
            console.log(user),
        )
        .catch(err=>console.log(err))
    }
    res.send(data)
})

app.post("/home3",(req,res)=>{
    console.log("username",req.body[0]);
    console.log("victory",req.body[1]);
    user.updateOne({name:req.body[0]},{victory:req.body[1]})
    .then(console.log("victory updated"))
    .catch(err=>console.log(err))
})






app.listen(1010,()=>{
    console.log("Server running on port 1010");
})