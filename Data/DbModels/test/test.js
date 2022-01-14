const mongoose=require('mongoose');
 const testTable=new mongoose.Schema({
     ID:{
         auto:true,
         type:Number,
        
     },
     Name:{
        type:String,
        required:true
    },
    UpdateDate:{
        type:Date,
        required:true,
        default:Date.now,
    },
 })
 module.exports=mongoose.model('testTable',testTable);