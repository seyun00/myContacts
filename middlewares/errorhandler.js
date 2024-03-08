const errorhandler = (err, req, res, next) => {
  const status = err.status || 500; // err.status가 true면 err.status값이 들어가고 false면 500이 들어감
  switch(status){
    case 400:
      res.status(status).json({
        title:"Bad Request",
        message:err.message
      })
      break;
    case 401:
      res.status(status).json({
        title:"Unauthorized",
        message:err.message
      })
      break;
    case 403: 
      res.status(status).json({
        title:"Forbidden",
        message:err.message
      })
      break;
    case 404: 
      res.status(status).json({
        title:"Not Found",
        message:err.message
      })
      break;
    case 500:
      res.status(status).json({
        title:"Internal Server Error",
        message:err.message
      })
      break;
    default:
      res.status(status).json({
        title:"No Error",
        message:err.message
      })
      break;
  }
}

module.exports = errorhandler

