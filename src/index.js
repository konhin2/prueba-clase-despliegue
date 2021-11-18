// 1.- Importaciones
const express = require('express')
const app = express()

const connectDB = require("./config/db")

// Para poder usar variables de entorno
require('dotenv').config()

// 2.- Middlewares
// Un middleware es una funcion que se ejecuta despues de que el servidor recive una peticion peticion y antes de dar una respuesta.

// Trabajar con archivos estaticos que puedan ser visualizados por el cliente
app.use(express.static(__dirname + './public'))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

connectDB()

// 3.- Rutas

// 4.- Servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`)
})