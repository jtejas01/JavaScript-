let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log((myDate.toDateString()));
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
//Date is type of object
let myCreatedDate = new Date(2023,0,23);
let myCreatedDate1 = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate1.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getHours());
`${newDate.getDay()}` //and the time
console.log(newDate.toLocaleString('default',{weekday:"long",}));
