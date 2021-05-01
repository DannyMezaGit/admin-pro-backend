/*
    Ruta: /api/usuarios
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const { getUsuarios, crearUsuario, updateUsuario } = require('../controllers/usuarios');

const router = Router();


router.get('/', getUsuarios);

router.post('/', [

    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'password obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),
    validarCampos // debe ser el último a llamar, siempre después de los 'check'

], crearUsuario);

router.put('/:id', [

    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),
    check('role', 'role obligatorio').not().isEmpty(),
    validarCampos

], updateUsuario);


module.exports = router;
