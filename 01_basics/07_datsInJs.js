// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) //console.log(myCreatedDate.toLocaleString());-Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 5.03 time mein aayega
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(myTimeStamp);  //in milisec
// console.log(myCreatedDate.getTime()); //1970 se myCreated date tk
// console.log(Math.floor(Date.now()/1000)); //imp -into second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //january 0 se start hota hai
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})