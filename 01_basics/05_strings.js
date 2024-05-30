const name =new String("mehakgupta")
const repoCount=50
console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

const gameName=new String(`dhdhd`) //sting is obj not array

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName); //String is primitive-> stored in stack ,so upon applying function,no change in original function

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = name.substring(0, 4) //0 to 3 index -meha
console.log(newString);

const anotherString = name.slice(-4, 9) //mehakgupta-upt
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) //false

const newString02=new String("Meak-is-Gupta")
console.log(newString02.split('-',2)); //[ 'Meak', 'is' ]-A value used to limit the number of elements returned in the array.
//Split a string into substrings using the specified separator and return them as an array.

