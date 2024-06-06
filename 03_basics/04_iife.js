
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// console.log("aba",78,"ghk");aba 78 ghk
//sayMyName //only reference 
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
//addTwoNumbers(3+"4") //34
//number1, number2-parameters 
//while calling,we send arguments

// function addTwoNumbers(number1, number2){

//     // console.log(number1 + number2)
//     
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);
//Result: undefined -bcoz function os not returning something



function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function printMyName(username){
//     return `${username} just logged in`
// }
// console.log(printMyName("mehak"));
//console.log(printMyName()); undefined just logged in

function loginUserMessage(username = "sam"){ //default value
    if(!username){ //or (username===undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh")) ye sam ko overwrite kr degi

// function calculateCartPrice(val1, val2, ...num1){
//     return num1 
// }
//...= rest operator ya spread operator
//only ...num1 dete mtb ek array return hota jisme neeche wale elements hote
//ab val1,val2 mein 200 aur 400 jayega and ...num1 mein 500 200

// // console.log(calculateCartPrice(200, 400, 500, 2000))-[500,200]

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// }) direct object pass kr skte hai in function

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000])); //400