//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c); var(30) print ho jayega upr wale dono nhi hoge agar scope k andr ho to


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); error aayega then two wala bhi nhi chlega jo iske baad likha hai.

     two() //hitesh print kr dega as child can access parent but vica versa not true 

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)//error aayegi
const addTwo = function(num){ //fun iss type se declare krenge to pehle function callkrenge to error aayega
    return num + 2
}