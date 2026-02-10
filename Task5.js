// TASK 1 – Employee Merge System (Spread Operator)
// You have:
// let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
// let empPromotion = { role: "Developer", bonus: 10000 }
// Requirements:
// 1. Merge both objects using spread.
// 2. Update salary to 40000.
// 3. Add new property: experience: "2 years"
// 4. Print final employee object.

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
let empPromotion = { role: "Developer", bonus: 10000 }
// 1. Merge both objects using spread.
let empMerged = { ...empBasic, ...empPromotion }
// 2. Update salary to 40000.
empMerged.salary = 40000
// 3. Add new property: experience: "2 years"
empMerged.experience = "2 years"
console.log(empMerged);
console.clear();


// TASK 2 – Shopping Cart (Spread + Array)
// let cart1 = ["Shoes", "Shirt"]
// let cart2 = ["Watch", "Cap"]
// Requirements:
// 1. Merge both carts.
// 2. Add "Bag" at the end.
// 3. Add "Socks" at the beginning.
// 4. Print final cart.

let cart1 = ["Shoes", "Shirt"]
let cart2 = ["Watch", "Cap"]
// 1. Merge both carts.
let mergedCarts = [...cart1, ...cart2]
// 2. Add "Bag" at the end.
mergedCarts.push("Bag")
// 3. Add "Socks" at the beginning.
mergedCarts.unshift("Socks")
// 4. Print final cart.
console.log(mergedCarts);
console.clear();
// TASK 3 – Rest Operator Salary Calculator
// Create function:
// calculateTotalSalary(baseSalary, ...bonuses)
// Requirements:
// 1. Add all bonus values.
// 2. Return total salary.
// 3. Example:
// calculateTotalSalary(30000, 2000, 3000, 5000)
// Expected Output: Total Salary: 40000

function calculateTotalSalary(baseSalary, ...bonuses) {
    let totalBonus = 0
    // 1. Add all bonus values.
    for (let i = 0; i < bonuses.length; i++) {
        totalBonus = totalBonus + bonuses[i]
    }
    // 2. Return total salary.
    let totalSalary = baseSalary + totalBonus
    return totalSalary
}
// 3. Example:
// calculateTotalSalary(30000, 2000, 3000, 5000)
let result = calculateTotalSalary(30000, 2000, 3000, 5000)
console.log(`Total Salary:${result}`);
console.clear();

// TASK 4 – Advanced Destructuring
// let student = {
// name: "Rahul",
// marks: { maths: 90, science: 85, english: 88 }
// }
// Requirements:
// 1. Destructure name.
// 2. Destructure maths and science.
// 3. Print:
// Rahul scored 90 in maths and 85 in science

let student = {
name: "Rahul",
marks: { maths: 90, science: 85, english: 88 }
}
// 1. Destructure name.
const{name}=student
// 2. Destructure maths and science.
const{marks:{maths,science}}=student
// 3. Print:
// Rahul scored 90 in maths and 85 in science
console.log(`${name} scored ${maths} in maths and ${science} in science`);
console.clear();

// TASK 5 – Array Manipulation
// let numbers = [10,20,30,40,50]
// Requirements:
// 1. Remove 30 using splice.
// 2. Add 25 in its place.
// 3. Reverse array.
// 4. Check if 50 exists.
// 5. Print final array.

let numbers = [10,20,30,40,50]
// 1. Remove 30 using splice.
numbers.splice(2,1)
console.log("After Removing 30:",numbers);
// 2. Add 25 in its place.
numbers.splice(2,0,25)
console.log("After adding 25:",numbers);
// 3. Reverse array.
numbers.reverse()
console.log("After reversing:",numbers);
// 4. Check if 50 exists.
let exists=numbers.includes(50)
console.log("Does 50 exist?",exists);

// 5. Print final array.
console.log("Final Array :",numbers);

console.clear();

// TASK 6 – Flatten Data
// let apiData = [1,2,[3,4,[5,6,[7,8]]]]
// Requirements:
// 1. Convert into single array.
// 2. Print output.
// 3. Find index of 6.

let apiData = [1,2,[3,4,[5,6,[7,8]]]]
// 1. Convert into single array.
let flattenedArray =apiData.flat(Infinity)
// 2. Print output.
console.log("Flattened array:",flattenedArray);

// 3. Find index of 6.
let indexOfSix=flattenedArray.indexOf(6)
console.log("Index of 6 :",indexOfSix);
console.clear();

