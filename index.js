const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');


// ? Crear servidor Express
const app = express();

// Base de datos
dbConnection();

// mean_user
// 5QuuF17DWz5mCnf9
console.log(process.env);



// Rutas
app.get( '/', (req, res) => { // ? '/' solicitud, ruta
    res.json({ // ? respuesta a la solicitud
        ok: true,
        msg: 'Hola mundo'
    });
} );

app.listen(process.env.PORT, () => {
    console.log("serv corriendo en puerto" + process.env.PORT)
});