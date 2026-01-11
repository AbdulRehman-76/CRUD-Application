const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
});

module.exports = mongoose.model("User", userSchema);


// const {Schema,model} = require('mongoose');
// //first i create schema in which i define fields
// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     maxlength: 50
//   },
//   age : {
//     type : Number,
//     required : true
//   },
//   weight :{
//     type : Number
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// //using schema {userSchema}, i create model
// const UserModel = model("User", userSchema);

// //i export it to use anywhere
// module.exports = UserModel;