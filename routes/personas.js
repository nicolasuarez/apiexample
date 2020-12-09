var express = require('express');
var router = express.Router();
const path = require("path");
const controller = require(path.join(__dirname,"..","controllers","personas"));
router.get("/",controller.obtenerPersonas);
router.get("/:idPersona",controller.obtenerPersona);
router.post("/",controller.crearPersona);
router.delete("/:idPersona",controller.eliminarPersona);
router.put("/:idPersona",controller.actualizarPersona);
module.exports = router;