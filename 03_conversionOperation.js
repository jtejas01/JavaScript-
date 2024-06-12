let score = 33
console.log(typeof score)
score = "33"
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

score = "33abc"
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log("value "+valueInNumber);

score = null
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

score = undefined
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);
// "33" -> 33
// "33abc"->Nan
//true -> 1;false ->0
// ---------------number to boolean ----------- 
//1=> true
// empty string => false 
//"tejas "=> true 