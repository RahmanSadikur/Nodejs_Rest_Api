require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect(process.env.DatabaseUrl)
const db=mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('connected to mongodb databese:testDB'));
app.use(express.json());
const testRouter=require('./Controller/testController');
app.use('/testController',testRouter);
app.listen(3000,()=>console.log('Server Started at port 3000'));