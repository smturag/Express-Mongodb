const express = require('express')
const app= express()
var bodyParser = require('body-parser')
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient
const port= 3000
const connectionDb = require('./database')
const mongoose = require('mongoose')
console.log(connectionDb)

// const Login = new mongoose.Schema({
//   name: String,
//   age: String

// })
// const CModel = mongoose.model('CModel',Login)
// const Turag = new CModel({
// name: 'Turag',
// age: '24'

// })








console.log(connectionDb.CModel)


app.use(bodyParser.json());
var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/turag',(req,res)=>{
  const abc = CModel.find({},function(err,result){
    if(err){
      console.log(err)
    }
    res.json(result)
      console.log(result)
    })   
    
})

app.listen(port)