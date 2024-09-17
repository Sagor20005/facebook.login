// Dependencies
const express = require("express")
const mongodb = require("./mongodb/conndb")

const router = require("./router")


const app = express()
// connect database
mongodb()

// parser
app.use(express.json())
app.use(express.urlencoded({
  extended:true,
  type:"application/x-www-form-urlencoded"
}))

// view engin
app.set("view engine","ejs")

// router
app.use(router)


app.listen(9000,()=>{
  console.log("server is running at 5000")
})
