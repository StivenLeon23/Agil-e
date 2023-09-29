const express = require ('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const app = express()
const connectDatabase = require('./server/data/database')
const courseRoutes = require('./server/routers/CourseRouters')
const authRoutes = require('./server/routers/auth')
const validaToken = require('./server/routers/validate-token')
const admin = require ('./server/routers/admin')

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

connectDatabase();

app.use(express.json());

app.use('/api/admin',validaToken,admin)
app.use('/api/user', authRoutes)
app.use('/courses', courseRoutes)

const PORT = process.env.PORT || 3000

app.listen  (PORT, ()=>{
    console.log(`Puerto abierto ${PORT}`)
})
