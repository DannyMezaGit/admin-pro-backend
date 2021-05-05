require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


// ? Crear servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();

// mean_user
// 5QuuF17DWz5mCnf9
console.log(process.env);



// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/lgin', require('./routes/auth') );


app.listen(process.env.PORT, () => {
    console.log("serv corriendo en puerto" + process.env.PORT)
});