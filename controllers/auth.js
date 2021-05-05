const { response } = require("express");

const Usuario = require('../models/usuario');
const  bcrypt = require('bcryptjs');


const login = async (req, res = response) => {

    const { email, password } = req.body;
  
    try {

        // ? Verificar email

        const usuarioDb = await Usuario.findOne({ email });
        if(!usuarioDb){
            return res.status(400).json({
                ok: false,
                msg: "Usuario o contraseña incorrecto",
              });
        }

        // ? Verificar contraseña

        const validPassword = bcrypt.compareSync( password, usuarioDb.password );
        if( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: "Usuario o contraseña incorrecto",
              });
        }

        // ? Generar el token

        



        res.json({
            ok: true, 
            msg: 'Hola mundo'
        })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};



module.exports = {
    login
}