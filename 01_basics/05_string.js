const name = "roank";
const repoCount = 50;

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

 const newName = new String('Ronak bhaiya')

// console.log(newName[0]);
// console.log(newName.toUpperCase())
// console.log(newName.charAt(0));
// console.log(newName.indexOf('b'));


const newString = newName.substring(0,7);
console.log(newString)

const anotherString = newName.slice(-6)
console.log(anotherString)

const giveName = "     LE     bHAI   "

console.log(giveName.trim());

const url = "https://ronak.com/ronak%20harbala"
console.log(url.replace("%20","-"))


console.log(giveName.includes("HA"))
console.log(url.split('/'))

