const mongoose = require('mongoose')

async function connectDatabase(){
    try{
        const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@courses.qjib8ch.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;        
        const options = {useNewUrlParser: true, useUnifiedTopology: true}
        await mongoose.connect(uri, options)
        .then(() => console.log('Base de datos conectada'))
    }catch(error){
        console.log ('Error en la conexion a la database', error)
    }
}

module.exports = connectDatabase

/*// Conexión a Base de datos auth
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@courses.qjib8ch.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))
*/



