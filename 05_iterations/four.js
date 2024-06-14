const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(myObject[key]);
}
// javascript
// C++
// ruby
// swift by apple
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}
// 0
// js
// 1
// rb
// 2
// py
// 3
// java
// 4
// cpp

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} //ye nhi hoga iss trike se