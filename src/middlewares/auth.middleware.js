const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  //Validar que el token sea correcto
  const bearerToken = req.headers.authorization;
  if(bearerToken){
    const token = bearerToken.split("Bearer ")[1];
    try{
      const decoded = jwt.verify(token, "academlocat21");
      req.user = decoded;
      next(); //token valido
    }catch(error){
      next(error); //token invalido
    }
  }
};

module.exports = {
  validateToken
}