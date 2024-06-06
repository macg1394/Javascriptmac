// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(typeof myHeors); //object
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //start mein add
// myArr.shift() // The shift() method of Array instances removes the first element from an array and returns that removed element.

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //returns -1 if element is not there

// const newArr = myArr.join()

// console.log(myArr); [0,1,2,3,4,5]
// console.log( newArr); myArray ko string mein tbdil kr diya with comma separated 0,1,2,3,4,5
//typeof newAre=string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]splice manipulated original array
// [ 1, 2, 3 ]