// 1.- Importaciones
const express = require('express')
const app = express()

const connectDB = require("./config/db")
require("hbs")

const bodyParser = require("body-parser")

// Para poder usar variables de entorno
require('dotenv').config()

// Importar Modelo
const Book = require('./models/Book')

// 2.- Middlewares
// Un middleware es una funcion que se ejecuta despues de que el servidor recive una peticion peticion y antes de dar una respuesta.

// Trabajar con archivos estaticos que puedan ser visualizados por el cliente
app.use(express.static(__dirname + '/public'))

app.set("views", __dirname + "/views")
app.set("view engine", 'hbs')

connectDB()
// Usar libreria de body parser que es un middleware
app.use(bodyParser.urlencoded({ extended: true }))



// 3.- Rutas

// Home
app.get('/', (req, res) => {
    res.render('index')
})

// Obtener los libros GET
app.get("/books", async (req, res) => {
    try {
        const librosEncontrados = await Book.find({})
        res.render('books', {
            books: librosEncontrados
        })
    }
    catch (err) {
        console.log(err)
    }
})

// Ver detalles de cada libro 

// Editar un libro

// Borrar un libro

// 4.- Servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`)
})