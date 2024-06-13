const name = "tejas ";
const repoCount = 50;
//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
const gameName = new String("tejas")//Declaring a string using javascript objects
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);  
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,3)//last value will not be included i.e 3
console.log(newString);
const anotherString = gameName.slice(-4,5)//we can give -ve value for slice but cannot give such value for substring

console.log(anotherString);
const newStringOne = "   t ej as    ";
console.log(newStringOne)
console.log(newStringOne.trim());
