const express=require('express');
//const test = require('../Data/DbModels/test/test');
const repo = require('../Repo/test/testRepo');
const router=express.Router();
//const mongoose = require('mongoose');
//geting all
router.get('/',repo.GetAll,(req,res)=>{
    // try {
    //     const tests=await test.find()
    //     res.status(200).json(tests);
    // } catch (error) {
    //     res.status(500).json({message:error.message});
    // }
    res.send(res.tests);
})
//geting one
router.get('/:id',repo.Get,( req , res)=>{
// try {
//     const tests=await test.findOne({_id:mongoose.Types.ObjectId(req.params.id)});

//     res.status(200).json(tests);
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
res.json(res.testdata);
})
//save
router.post('/',repo.Save,(req,res)=>{
//const t=new test({Name:req.body.Name});

// try {
//     const newt=t.save();
//     res.status(201).json(newt);
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
res.json(res.testdata);
})
//update
router.patch('/:id',repo.Save,(req,res)=>{

    // try {
    //     let t=await test.findOne({_id:mongoose.Types.ObjectId(req.params.id)});
    //     t.Name=req.body.Name;
    //     const newt=t.save();
    //     res.status(201).json(newt);
    // } catch (error) {
    //     res.status(500).json({message:error.message});
    // }
    res.json(res.testdata);

})
//delete
router.delete('/:id',repo.Delete,(req,res)=>{
    
    // try {
    //     const tests=await test.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)});
    //     res.status(200).json(tests);
    // } catch (error) {
    //     res.status(500).json({message:error.message});
    // }
    res.json(res.testdata);
})

module.exports=router;