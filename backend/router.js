const express= require('express')
const route=express.Router()
const mongoose=require('mongoose')
const Model=require('./schema/abcModel')

route.post("/signup", async (req,res)=>{
    const {name, phone,age,timing,month}=req.body
    try{
        const abc=  new Model({name, phone,age,month,timing})
        const abcd =await abc.save()
        console.log(name,phone,age,timing,month)
        res.status(200).json({"macho":"ha"})
    }catch(error){  
       
        res.status(404).json({error:error.message})
        
    }
    
})
module.exports=route