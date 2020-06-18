const mongoose = require('mongoose')
const Schema = mongoose.Schema

const publicData = new Schema({

    "name": {
        "firstName": String,
        "lastName": String,
        "nickName": String,
    },
    "age": String,
    "email": String
    
})
const DataModel = mongoose.model('DataModel', publicData)
// const value = new DataModel({
//     name: {
//         firstName: "Turag",
//         lastName: "Shagor",
//         nickName: "Turag",
//     },
//     age: "25",
//     email: "@",
//     Gender: "male"

// })

// const abc =  value.save(function(err){
//     if(err) return handleError(err);
// })

module.exports = mongoose.model('DataModel', publicData)




