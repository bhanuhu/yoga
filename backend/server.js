const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const bodyParser= require("body-parser");
const rout=require('./router')
const app = express()
const abc=process.env.MONGO_URI
const port=process.env.PORT_URI
app.use(express.json())

app.use("/",rout)

mongoose.connect(abc)
.then(()=>{
    app.listen(5050,()=>{
        console.log("listenig at http://localhost:5050/")
    })   
})
.catch((error)=>{
    console.log(error)
 })



