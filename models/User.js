const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{type:String,
    required: [true,'required!!']} ,
  email: {
    unique: [true,'email already exists'],
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    required: [true,'required!!']
  },
  password:{ type:String,
    required: [true,'required!!']}
})

const User = mongoose.model('User', userSchema);
module.exports = User;