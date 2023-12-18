const mongoose=require('mongoose')
const schema = mongoose.Schema
const myschema= new schema({
    
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    timing:{
        type:Number,
        required:true
    },
    month:{
        type:Number,
        required:true
    }
},{timestamps:true}) 
const Model=mongoose.model('Model',myschema)
module.exports=Model