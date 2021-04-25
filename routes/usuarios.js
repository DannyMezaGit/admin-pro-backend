/*
    Ruta: /api/usuarios
*/
const {Router} = require("express");
const {check} = require("express-validator");

const { getUsuarios, crearUsuario } = require('../controllers/usuarios');

const router = Router();


router.get('/', getUsuarios);

router.post('/', [

    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'password obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail()

], crearUsuario);

module.exports = router;
