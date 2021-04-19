const Usuario = require('../models/usuario');

const getUsuarios = (req, res) => {
  
    res.json({
      ok: true,
      msg: "Get Usuarios",
    })
}

const crearUsuario = async (req, res) => {

    const {email, password, nombre} = req.body;

    const usuario = new Usuario(req.body);

    await usuario.save();
  
    res.json({
      ok: true,
      usuario // ? usuario: usuario igual a decir sólo usuario.
    });
}

module.exports = {
    getUsuarios,
    crearUsuario,


}