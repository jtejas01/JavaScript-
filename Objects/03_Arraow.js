const user = {
    username : "tejas",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} Welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();
console.log(this);
//Global object in browser is window object
function one ()
{
    let username1 = "tejas"
    console.log(this.username1);// gives output as undefined
}//this can be used for current object only cannot be accessed like function i.e user.username 
one()

//const two = function (){}
//function two(){}
// const two = ()=>{}
// const two = () =>
// {
//     let userName = "tejas"
//     console.log(this);
// }
// In arrow function we cant access this keyword
//two()
const addTwo = (num1,num2) => { // holding arrow function in variable
    return num1 + num2
}

// one liner inside arrow function can be written as
 //const add2 = (nm1,nm2) => nm1 + nm2
 const add2 = (nm1,nm2) => (nm1 + nm2)
 //if we use {} instead of () we must add a return statement in the upper line
const RetObj = (num1,num2)=> ({username :"tejas"})
// to return a object we must give ({}) 
console.log(add2(3,4));

// const MyArr = [2,3,4,5,6,7,8]
// MyArr.forEach(function() {})
//++++++++++++++++++++ IIFE ++++++++++++++++++++
// we can face some issues due to global scope declarations so to avoid such pollutions we use iffee
(function Myfunction()
{
    console.log(`DB connected two`);
})();
// There was error as immidietly invoked functions do not know where to stop so use ; to end 

((name) => {
    console.log(`DB Connected ${name}`);
})("tejas")