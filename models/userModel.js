const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema(
  {
    username:{
      type: String,
      required: true,
      uinque: true,
    },
    password:{
      type: String,
      required: true,
    }
  }
);

module.exports = mongoose.model("User",Userschema);