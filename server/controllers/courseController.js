const Course = require ('../models/Course')

exports.getAllCourses= async(req,res) =>{
    try{
        const courses = await Course.find()
        const courseByNombre = {}

        courses.forEach((course) =>{
            if(!courseByNombre[course.nombreCurso]){
                courseByNombre[course.nombreCurso]=[]
            }
            courseByNombre[course.nombreCurso].push(course)
        })
        
        res.json(courseByNombre)
    }catch(error){
        res.status(500).json({error:'Error al obtener los datos'})
    }
}
