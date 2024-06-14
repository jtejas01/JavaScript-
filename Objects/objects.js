//Singleton 
//if we create the object with literls the created object is not is not singleton
//if we create object using constructor that object will be a SingleTon
const mySym = Symbol("Key1")

// Object Literals
const jsUser = {
    name : "Tejas",//this name is inhenrently String
    //name is key and tejas is value
    age : 18,
   // mySym : "key1",
    //If you mention this sym in such way it will give us output but it will not treated as datatype Symbol but as a string
    //the correct wy to write symmbol in object is 
    [mySym] : "mykey1",
    "Full Name " : "Tejas Jahagirdar",

    location : "Pune",
    email : "tejas@google.com",
    lastLoginDays : ["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
//In case of full name you cant access it with method of objectName.key
//i.e jsUser.fullName 
console.log(jsUser["Full Name "])

// to overwrite values in object 
jsUser.email = "tejas@123.gmail.com";
console.log(jsUser["email"]);

//to lock the values in object 
//Object.freeze(jsUser);
jsUser.email ="tejas@123";
console.log(jsUser);
//it does not throw any error but also not changed any useremail
jsUser.greetings = function () {
    console.log(("HELLO Js User"));
}
console.log(jsUser.greetings());
jsUser.greetings2 = function ()
{
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greetings2());
