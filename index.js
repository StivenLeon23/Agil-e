const express = require ('express')
const app = express()
const connectDatabase = require('./server/data/database')
const courseRoutes = require('./server/routers/CourseRouters')

connectDatabase();

app.use(express.json());

app.use('/courses', courseRoutes)

const PORT = 3000

app.listen  (PORT, ()=>{
    console.log(`Puerto abierto ${PORT}`)
})
