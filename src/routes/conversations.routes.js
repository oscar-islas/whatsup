const {Router} = require("express");
const conversationCtrl = require("../controllers/conversations.controller");

const router = Router();

//GET -> obtener todos los registros
router.get("/conversations", conversationCtrl.getAll);
//GET -> obtener un registro por id
router.get("/conversations/:id", conversationCtrl.getById);
//POST -> Agregar un registro
router.post("/conversations", conversationCtrl.create);
//UPDATE -> Actualizar un registro
router.put("/conversations/:id", conversationCtrl.update);
//DELETE -> Borrar un registro
router.delete("/conversations/:id", conversationCtrl.delete);

//Relaciones con otros modelos
router.get("/conversations/:id/users", conversationCtrl.conversationUsers);

router.get("/conversations/:id/participants", conversationCtrl.conversationParticipants);

//Completar la siguiente ruta
router.delete("/conversations/:id/participants");

router.get("/conversations/:id/messages", conversationCtrl.conversationMessages);

module.exports = router;