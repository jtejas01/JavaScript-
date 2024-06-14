//const tinderUser = new Object()//singleton object
const tinderUser = {}//non singleton Object
//console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullName : {
        userFullName :{
            firstName :"tejas",
            lastName : "Jahagirdar"

        }
    }
}
console.log(regularUser.fullName?.userFullName.firstName);
// ? ==> checks if it exist the proceed

//++++++++++++++++++++Combine Objects +++++++++
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}

//it gives us output as object inside object same as array problem of .push 
//const obj3 = Object.assign({},obj1,obj2);
//there is one more syntax example given below
//const obj3 = Object.assign(obj1,obj2)
//{} => optional parameter it gives the confirm result using {} is good practice

const obj3 = {...obj1,...obj2}
console.log(obj3);

// you get the array of objects from MySql 
//like given below
const users = [
    {
        id : 1,
        email :"abc@123"
    },
    {
        id : 2,
        email :"lmn@123"
    },
    {
        id : 3,
        email :"xyz@123"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// Every entry key and value pair is converted to objects
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
