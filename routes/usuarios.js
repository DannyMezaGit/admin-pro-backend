/*
    Ruta: /api/usuarios
*/
const {} = require("express");
const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

module.exports = router;
