const mongoose = require("mongoose")

const dbUrl = "mongodb+srv://ms6392883:root@chatingdb.qvpw3qv.mongodb.net/"
const mongodb = ()=>{
mongoose.connect(`${dbUrl}hack_facebook`)
.then(()=>{console.log("database connected..")})
.catch((err)=>{console.log(err)})
}
module.exports = mongodb;