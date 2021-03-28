const express = require('express');
const { dbConnection } = require('./database/config');


// ? Crear servidor Express
const app = express();

// Base de datos
dbConnection();

// mean_user
// 5QuuF17DWz5mCnf9



// Rutas
app.get( '/', (req, res) => { // ? '/' solicitud, ruta
    res.json({ // ? respuesta a la solicitud
        ok: true,
        msg: 'Hola mundo'
    });
} );

app.listen(3000, () => {
    console.log("serv corriendo en puerto 3000")
});