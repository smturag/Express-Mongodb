const express = require('express')
const app= express()
var bodyParser = require('body-parser')
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient
const port= 3000
const connectionDb = require('./database')
console.log(connectionDb)











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