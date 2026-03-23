// --- 1. Even Numbers Loop ---
console.log("--- 1. Even Numbers (2 to 10) ---");
for (let i = 2; i <= 10; i += 2) {
    console.log("Even Number: " + i);
}

// --- 2. Fruit List Loop ---
// I changed 'fruits' to 'myExerciseFruits' to fix the red error!
console.log("--- 2. My Favorite Fruits ---");
const myExerciseFruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < myExerciseFruits.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + myExerciseFruits[i]);
}
