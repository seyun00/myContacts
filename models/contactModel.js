const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    email:{
      type:String,
    },
    phone:{
      type:String,
      required:[true,"전화번호는 꼭 기입해 주세요"],
    },
  },
  {timestamps:true} //데이터 입력 시간 기록
);

const Contact = mongoose.model("Contact",contactSchema);


module.exports = Contact;

