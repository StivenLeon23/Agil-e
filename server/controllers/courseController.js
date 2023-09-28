const Course = require ('../models/Course')


exports.getAllCourses = async(req,res) =>{
    
    try{
        const courses = await Course.find()
        res.json (courses)
}catch (error){
    console.log('No se puede ejecutar')
}
}

exports.getOneCourse =async (req,res) =>{
    const {id} = req.params;
    const course = await Course.findById(id)
    return res.status(200).json(course)
}

exports.createCourse =async (req,res) =>{
    const newCourse = new Course ({...req.body})
    const insertedCourse = await newCourse.save()
    return res.status(200).json(insertedCourse)
}

exports.updateCourse = async (req,res) =>{
    const {id} =req.params;
    await Course.updateOne({_id: id},{...req.body})
    const updatedCourse = await Course.findById(id)
    return res.status(200).json(updatedCourse)
}

exports.deleteCourse = async(req,res) =>{
    const  {id} = req.params
    const CourseDelete = await Course.findByIdAndDelete(id)
    return res.status(202).json(CourseDelete) 
}