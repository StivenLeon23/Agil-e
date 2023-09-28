const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    nombreCurso: String,
    impartidoPor: String,
    descripcion: String,
    imagenCurso: String,
    cursoUrl: String
})

module.exports = mongoose.model('Course', courseSchema)
