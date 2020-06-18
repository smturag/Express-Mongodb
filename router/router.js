const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const router  = express.Router()
const bodyParser= require('body-parser')
const cors = require("cors");
const DataModel = require('../DataBase/schema');
const { findById } = require('../DataBase/schema');
const port = 3300


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//Post methode start form here
postData = function(req,res,next){
    // const name  = new DataModel()
    // name.firstName= req.body.firstName
    
    const name = new DataModel({
       
    
        name:{
            firstName: req.body.firstName ,
            lastName: req.body.lastName,
            nickName: req.body.nickName
        },
        age: req.body.age,
        email: req.body.email
    
   })
//    console.log(name)

   name.save(function(err){
       if(err) return handelerror(err)
   })
   res.send(JSON.stringify(name))
}

app.post('/name',postData)

//post methode end

//get post by value methode start form here
async function findData(req,res,next){

    try {
        const a = req.params.age.substr(1)
        const b = req.query.age 
        
        
    //const all = await DataModel.find({age:a})
    res.send(JSON.stringify(all))
    console.log(a)
    console.log(b)
    console.log(req.ip)
        
    } catch (error) {
        console.log(error)
        
    }
    
    
}
app.get('/find/:age', findData)

//end
//get only post 

async function findAllData(req,res,next){

    try {
    const all = await DataModel.find()
    res.send(JSON.stringify(all))  
    } catch (error) {
        console.log(error)
        
    }
    
    
}
app.get('/find', findAllData)

//end

//delete post
async function deleteData(req,res,next) {   

    try {
        const fName = req.params.firstName.substr(1)
        const dData = await DataModel.deleteOne({'name.firstName':fName})
        console.log('Delete Successfully')
        console.log(fName)
        res.send('BYE')
        
    } catch (error) {
        
      
        console.log(error)
        res.send('not bye')
    }
   
    
}

app.delete('/delete/:firstName',deleteData)
//end




const extract = app.listen(port)
module.exports.extract = extract