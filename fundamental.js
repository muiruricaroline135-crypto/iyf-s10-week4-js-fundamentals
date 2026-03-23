// Fundamentals by Caroline

let fullName = "Caroline Muiruri";
let age = 25;
let isStudent = true;

console.log("Name:", fullName);
console.log("Age:", age);
console.log("Student:", isStudent);

// Loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Even numbers
for (let j = 0; j <= 20; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

// FizzBuzz
for (let f = 1; f <= 20; f++) {
  if (f % 3 === 0 && f % 5 === 0) {
    console.log("FizzBuzz");
  } else if (f % 3 === 0) {
    console.log("Fizz");
  } else if (f % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(f);
  }
}

// Arrays
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log(fruit));

// Objects
const person = {
  name: "Caroline",
  age: 25
};

console.log(person);
