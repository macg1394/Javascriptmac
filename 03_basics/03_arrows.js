const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()//hitesh,...
 user.username = "sam"
 user.welcomeMessage() 
 //sam , welcome to website
// {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// console.log(this); {}
//browser ke andr global obj hai window object.console.log(this); 
//isko agar na browser mein bhejenge to Window print hoga,aur yaha {}


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined print hoga
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //{}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return neeche -brckt aur return lgane ki no need
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

//object ko return krne ke liye bahr wale parenthesis zroori
console.log(addTwo(3, 4)) //{ username: 'hitesh' }


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()