const { response } = require('express');

const  bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

const getUsuarios = async (req, res) => {
  
  const usuarios = await Usuario.find({}, 'nombre email role google');
    res.json({
      ok: true,
      usuarios
    });
}

const crearUsuario = async (req, res = response) => {

    const {email, password, nombre} = req.body;

    

    try {

      const existeEmail = await Usuario.findOne({ email });

      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          msg: 'El correo ya está registrado'
        })
      }


      const usuario = new Usuario(req.body);

      // ? Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      usuario.password = bcrypt.hashSync(password, salt);

      await usuario.save();
    
      res.json({
        ok: true,
        usuario // ? usuario: usuario igual a decir sólo usuario.
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Error inesperado'
      });
      
    }  
}

const updateUsuario = async (req, res = response) => {

  const uid = req.params.id;

  try {
    
    const usuarioDB = Usuario.findById( uid );

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: $`No se encontró el usuario con el id ${uid}`
      });
    }
    
    // Actualizaciones
    const {password, google, email, ...campos} = req.body;

    if ( usuarioDB.email != email) {

      const existeEmail = await Usuario.findOne({email});
      
      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          msg: "Un usuario ya existe con ese correo"
        })
      }
    }
    
    const usuarioActualizado = await Usuario.findOneAndUpdate( uid, campos, { new: true } );
    
    res.json({
      ok: true,
      usuario: usuarioActualizado
    });
    
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado'
    });
  }
}

const borrarUsuario = async (req, res = response) => {
  
  const uid = req.params.id;

  try {

    const usuarioBD = await Usuario.findById( uid );

    if (!usuarioBD) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe un usuario por ese id'
      });
    }

    await Usuario.findByIdAndDelete(uid);
    
    res.json({
      ok: true,
      msg: 'Usuario eliminado'
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al intentar realizar un borrado'
    });
  }
}

module.exports = {
    getUsuarios,
    crearUsuario,
    updateUsuario,
    borrarUsuario
}