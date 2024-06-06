// singleton-constructor se bnega mtb singleton ,literal se singleton nhi -bnega

// Object.create

// object literals

const mySym = Symbol("key1") //symbol declare


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //mySym: "mykey1", console.log(typeof JsUser[mySym])-string
    [mySym]: "mykey1", //imp-symbol jaise use krne ke liye sqr brckt mein declare krna pdega
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
 console.log(JsUser[mySym])
 console.log(JsUser["isLoggedIn"]);

// JsUser.email = "hitesh@chatgpt.com" //change 
// // Object.freeze(JsUser) //user change na krpaye
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);-puri details ke liye

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
     console.log(`Hello JS user, ${this.name}`); //jb koi value chahiye hoti hai na 
// to ` lagana string ke jagah
}

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greetingTwo());