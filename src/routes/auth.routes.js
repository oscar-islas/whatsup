const {Router} = require("express");
const {authenticate} = require("../controllers/auth.controller");

const router = Router();

//POST -> iniciar sesión
router.post("/auth/login", authenticate);


module.exports = router;