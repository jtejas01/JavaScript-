const course = {
    courseName :"Js in Hindi",
    price : "999",
    courseInstructure :"Tejas"
}
//to make code clean and avoid repetatiuon of course.name again couse.price etc
const {courseInstructure : instructor} = course;
console.log(instructor);
// const navbar =({company})=> {

// }
// navbar(company = "Tejas")
// Above commented code is in react and also destructured to avoid same repetition
// {
//     "name" : "Tejas",
//     "courseName" :"JavaScript",
//     "price" :"free" 
// }
