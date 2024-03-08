require("dotenv").config();
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET;

const checkLogin = async(req,res,next)=> {
  res.setHeader("Cache-Control","no-store,no-store,must-revalidate")
  const token = req.cookies.token;
  if(!token){
    return res.redirect("/");
  }
  try{
    const decoded = jwt.verify(token,jwtSecret)
    req.username = decoded.username
    next()
  }catch(error){
    res.status(401).json({message:"로그인이 필요합니다."})
  }
}

module.exports = checkLogin