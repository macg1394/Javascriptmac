// Immediately Invoked Function Expressions (IIFE)-global scope ke polution ko hatane ke liye 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //'hitesh' parameter hai

//2 iife ke liye ek mein semicolon lagana zroori hai