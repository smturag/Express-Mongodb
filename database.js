const mongoose = require('mongoose')
const uri = "mongodb+srv://ExpressMongodb:express123@expressmongodb-7wuxn.mongodb.net/ExpressMongodb?retryWrites=true&w=majority";

const connectionDb = mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })
module.exports.connectionDb = async function connectionDb(){
    let connectors= await connectionDb

      return connectionDb
}
  const Login = new mongoose.Schema({
    name: String,
    age: String

})
const CModel = mongoose.model('CModel',Login)
const Turag = new CModel({
  name: 'Turag',
  age: '24'

})
console.log(CModel.collection.collectionName)

