const myArr = [0,1,2,3,4,5,true,"tejas"]
 // javascript array are resizable there can be mix datatypes there can also objects
 //array in array,string ,boolean 
 console.log(myArr[0]);
 const myHeros = ["Shaktiman","Nagraaj"]
 const myArr2 = new Array(1,2,3,4)
 console.log(myArr2[0]);
// +++++++++++++++++++ Array Methods +++++++++++++++
myArr.push(6)
myArr.push(7);
myArr.pop()
myArr.unshift("tejas")

console.log(myArr);
myArr.shift()
myArr.includes(9);
myArr.indexOf(3);
const newArr = myArr.join()
console.log(typeof newArr);
// .join bind the array as well as convert its dataType from OBJECT TO STRING
//  +++++++++++SLICE,SPLICE ++++++++++++++++
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
// difference between slice and splice is
//in slice it does not change the original array in splice it changes the original array
// slice : does not gives th last element of range  
// splice : gives ---------||-------------
let marvelHeros = ["IronMan,SpiderMan,Thor,Hulk"];
let Dc_Heros = ["Flash","BatMan","AquaMan"]
//marvelHeros.push(Dc_Heros);
console.log(marvelHeros);
let allHeros = marvelHeros.concat(Dc_Heros)
console.log(allHeros);
//spread : bottel of glass when fals down
const Allheros = [...marvelHeros,...Dc_Heros];
console.log(Allheros);
const anotherArr = [1,2,3,[4,[5,6],11],[7,8],9,10]
const realAnotherArray = anotherArr.flat(Infinity);
console.log(realAnotherArray);

// to convert string to array 
console.log(Array.isArray("Tejas"));
console.log(Array.from("Tejas"));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
