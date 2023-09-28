const mongoose = require('mongoose')

async function connectDatabase(){
    try{
        await mongoose.connect('mongodb+srv://stivenleon23:Mabelg.2@courses.qjib8ch.mongodb.net/Agile_App?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('conexion establecida en la database')
    }catch(error){
        console.log ('Error en la conexion a la database', error)
    }
}

module.exports = connectDatabase


