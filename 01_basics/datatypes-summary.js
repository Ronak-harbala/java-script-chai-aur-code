// Primitive

// 7 types : String , Number , Boolean , null

// const score = 100;
// const scoreValue = 100.2;

// const isLoggedIn = true;
// const outsideTemp = null;

// let userEmail;
// console.log(userEmail)

// const id = Symbol('123')
// const anotherId = Symbol('123')

const bigNumber = 4887989999784412121n;
console.log(bigNumber);
console.log(typeof bigNumber);


// console.log(id === anotherId)

// Reference type(Non primitive)

// Array  , Objects


// const heros = ["shaktimaan" , "naagraj" , "doga"];

// let myObj = {
//     name : "Ronak",
//     age : 22,
//     class : "AI3"
// }

// console.log(myObj.name)

//**********************************************************

// Stack (Primitive) , Heap (Non-Primitive)

let name1 = "Ronak"
let anotherName = name1;

anotherName = "harbala"

console.log(name1)
console.log(anotherName)


let user1 = {
    email : "ronakyadav2004@gmail.com",
    password : "hello",

}

let user2 = user1;

user2.password = "kyaLikhu"

console.log(user1);



