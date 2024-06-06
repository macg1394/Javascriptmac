// const tinderUser = new Object() -singleton
const tinderUser = {}//-non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }-ye nhi krna hai
 //const obj3 = Object.assign({}, obj1, obj2, obj4)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//const obj3 = {...obj1, ...obj2}//ye use krenge
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 //console.log(obj3);


const users = [ //array ke andr objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //keys ka array
// console.log(Object.values(tinderUser)); values ka array
// console.log(Object.entries(tinderUser)); ek key aur uski value ka array phir dusra

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

//----destructuring----
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor} = course //ab direct courseINst..ko use kr skte without writing course.
const {courseInstructor: instructor} = course //courseInstructor ka short form hai instructor

// console.log(courseInstructor);
console.log(instructor);
//{}-destructuring kr rhe hai mtb agar kahi dikhe to


//ye niche hai json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[ //array
    {},
    {},
    {}
]

//json formatter
//api are sent in json format,earlier in xml 