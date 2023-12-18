const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const bodyParser= require("body-parser");
const rout=require('./router')
const app = express()
const abc=process.env.MONGO_URI
app.use(express.json())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
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



