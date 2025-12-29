const mg = require('mongoose')
const mongoUri="mongodb://localhost:27017/YashDB"

//connection
const connectToMongo=()=>{
    mg.connect(mongoUri)
    console.log("Connect Succesfully!");
}
connectToMongo();
//schema
const userSchema=new mg.Schema({
    name:String,
    password:String,
    victory:Number
})
//model
const user=mg.model('user2',userSchema)

module.exports = user