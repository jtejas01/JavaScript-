// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2"> 1);
console.log("02"<1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//to avoid such problems that is it convertd to nan or 0 or what else we check the code strictly so we can focus 
//only on buisness logic 
//************ strict check **************
//it also checks the data type for comparisions
console.log("2"===2);//this will return false 
console.log("2" == 2)//this will return true