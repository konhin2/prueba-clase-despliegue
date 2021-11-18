const mongoose			= require("mongoose")

const connectDB = async () => {

	// CONECTARNOS DESDE ESTE PROYECTO A LA BASE DE DATOS
	await mongoose.connect(process.env.MONGODB)
	console.log("Base de Datos conectada")
	
}


module.exports = connectDB