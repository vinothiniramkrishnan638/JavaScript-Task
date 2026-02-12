// Task 1 – forEach() Practice
// let subjects = ["Maths", "Science", "English", "History"]
// Requirements:
// • Use forEach()
// • Print Subject 1: Maths ... Subject 4: History
// • Store result in a variable
// • Question: Why does forEach() return undefined?

let subjects = ["Maths", "Science", "English", "History"]
// Use forEach()
let result = subjects.forEach((currentElement, index) => {
    console.log(`Subject ${index + 1}: ${currentElement}`);
})
// Print Subject 1: Maths ... Subject 4: History
console.log("Result stored in variable:", result);
console.clear();

// Question: Why does forEach() return undefined?
// forEach() => always returns undefined because designed only for iteration & side effects
// does not create or return new array like map() does
// executes function for each elements but doesn't return anything


// Task 2 – map() Practice
// let prices = [100, 200, 300, 400]
// Requirements:
// • Use map()
// • Add 10% GST
// • Return new array
// • Expected Output: [110, 220, 330, 440]

let prices = [100, 200, 300, 400]

// Use map()
let pricesWithGST = prices.map((currentElement) => {
    // Add 10% GST
    let gst = (currentElement * 10) / 100
    // Return new array
    return currentElement + gst
})
console.log(pricesWithGST);
console.clear();

// Task 3 – filter() Practice
// let students = [
//  { name: "A", marks: 45 },
//  { name: "B", marks: 75 },
//  { name: "C", marks: 35 },
//  { name: "D", marks: 85 }
// ]
// Requirements:
// • Use filter()
// • Get students scoring above 50
// • Print filtered array

let studentsData = [
    { name: "A", marks: 45 },
    { name: "B", marks: 75 },
    { name: "C", marks: 35 },
    { name: "D", marks: 85 }
]
// Use filter()
let passedStudents = studentsData.filter((currentElement) => {
    // Get students scoring above 50
    return currentElement.marks > 50
})
//  Print filtered array
console.log(passedStudents);
console.clear();

// Task 4 – find() Practice
// Use same students array
// Requirements:
// • Use find()
// • Find first student scoring above 50
// • Print that object
// • Question: Difference between filter() and find()?

let studentsList = [
    { name: "A", marks: 45 },
    { name: "B", marks: 75 },
    { name: "C", marks: 35 },
    { name: "D", marks: 85 }
];

// Use find() 
let firstPassedStudent = studentsList.find((currentStudent) => {
//    find first student scoring above 50
    return currentStudent.marks > 50;
});

// Print that object
console.log(firstPassedStudent);

// Question: Difference between filter() and find()?
// filter() => returns an ARRAY of all elements that match the condition,returns empty array [] if nothing matches
// find() => returns only the FIRST element that matches the condition (single object, not array),returns undefined if nothing matches
console.clear();


// Task 5 – reduce() Practice
// let cart = [
//  { item: "Shirt", price: 1000 },
//  { item: "Shoes", price: 2000 },
//  { item: "Watch", price: 3000 }
// ]
// Requirements:
// • Use reduce()
// • Calculate total price
// • Bonus: Add 5% tax inside reduce()
let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
]
// Use reduce(),Calculate total price
let totalPrice =cart.reduce((accumulator,currentElement)=>{
    return accumulator + currentElement.price
},0)
console.log((`Total Price : ${totalPrice}`));

// Bonus: Add 5% tax inside reduce()
let totalWithTax = cart.reduce((accumulator,currentElement)=>{
    let priceWithTax =currentElement.price+(currentElement.price*5)/100
    return accumulator+priceWithTax

},0) 
console.log(`Total Price with 5% Tax: ${totalWithTax}`);

console.clear();

// Task 6 – some() Practice
// let numbers = [1, 3, 5, 7, 8]
// Requirement:
// • Check if at least one number is even
// • Output: true

let numbers = [1, 3, 5, 7, 8]
// Check if at least one number is even
let hasEvent = numbers.some((currentElement)=>{
    return currentElement % 2 ===0
})
console.log(hasEvent);
console.clear();


// Task 7 – every() Practice
// let ages = [22, 25, 19, 30]
// Requirement:
// • Check if all ages are above 18

let ages = [22, 25, 19, 30]

// Check if all ages are above 18

let allAbove18 = ages.every((currentElement)=>{
    return currentElement >18
})
console.log(allAbove18);

console.clear();

// Task 8 – sort() Practice
// let salaries = [50000, 10000, 70000, 30000]
// Requirements:
// • Sort ascending
// • Sort descending
// • Explain why normal sort() fails for numbers


let salaries = [50000, 10000, 70000, 30000]
// Sort ascending
let ascending = salaries.sort((a,b)=>{
    return a-b
})
console.log(ascending);
// Sort descending
let descending = salaries.sort((a,b)=>{
    return b-a
})
console.log(descending);

// Explain why normal sort() fails for numbers
// sort()=>converts elements to string and compares them ,eg:[1,100,21,30,4],give[1,100,21,30,4]
// because "100" comes before "21" in string comparison("1"<"2")
// we need to compare function (a,b)=>a-b for numbers
console.clear();

// Task 9 – Array Conversion Methods
// let arr = [10, 20, 30, 40]
// Requirements:
// • Convert using toString()
// • Convert using join("-")
// • Expected Output: 10-20-30-40

let arr = [10, 20, 30, 40]
// Convert using toString()
let stringVersion = arr.toString()
console.log(stringVersion);
// Convert using join("-")
let joinedVersion = arr.join("-")
console.log(joinedVersion);

console.clear();


// Task 10 – charAt() & charCodeAt()
// let word = "Developer"
// Requirements:
// • Get character at index 4
// • Get ASCII value of character at index 4

let word = "Developer"

// Get character at index 4
let character = word.charAt(4)
console.log(character);

// Get ASCII value of character at index 4
let asciivalue = word.charCodeAt(4)
console.log(asciivalue);
console.clear();

// Task 11 – slice()
// let company = "StacklyCompany"
// Extract: Company

let company = "StacklyCompany"
// Extract: Company
let extracted = company.slice(7)
console.log(extracted);
console.clear();


// Task 12 – Case Conversion
// let userInput = "javaScript"
// • Convert to uppercase
// • Convert to lowercase

let userInput = "javaScript"
// Convert to uppercase
let uppercase = userInput.toUpperCase()
console.log(uppercase);

// Convert to lowercase
let lowercase = userInput.toLowerCase()
console.log(lowercase);
console.clear();

// Task 13 – trim()
// let email = " naveen@gmail.com "
// Remove unwanted spaces

let email = " naveen@gmail.com "
// Remove unwanted spaces
let trimmedEmail = email.trim()
console.log(trimmedEmail);
console.clear();

// Task 14 – includes()
// let message = "Welcome to JavaScript Training"
// Check if "JavaScript" exists


let message = "Welcome to JavaScript Training"

// Check if "JavaScript" exists
let hasJavaScript = message.includes("JavaScript")
console.log(hasJavaScript);
console.clear();

// Task 15 – split()
// let movie = "spider-man-no-way-home"
// Convert into array

let movie = "spider-man-no-way-home"

// Convert into array
let movieArray = movie.split("-")
console.log(movieArray);
console.clear();

// Task 16 – indexOf() & lastIndexOf()
// let text = "programming"
// • Find first index of 'm'
// • Find last index of 'm'

let text = "programming";

// Find first index of 'm'
let firstIndexOfM = text.indexOf('m');
console.log("First index of 'm':", firstIndexOfM);

// Find last index of 'm'
let lastIndexOfM = text.lastIndexOf('m');
console.log("Last index of 'm':", lastIndexOfM);

console.clear();

// Task 17 – replace()
// let tech = "I love python"
// Replace python with javascript

let tech = "I love python"


// Replace python with javascript
let updatedTech = tech.replace("python","javascript")
console.log(updatedTech);

console.clear();


// Task 18 – startsWith() & endsWith()
// let filename = "report.pdf"
// • Check if starts with "report"
// • Check if ends with ".pdf"

let filename = "report.pdf"
// Check if starts with "report"
let startWithReport = filename.startsWith("report")
console.log(startWithReport);

// Check if ends with ".pdf"
let endsWithpdf=filename.endsWith("pdf")
console.log(endsWithpdf);
console.clear();

// Task 19 – repeat()
// let star = "*"
// Print 10 stars using repeat()


let star = "*"
// Print 10 stars using repeat()
let stars = star.repeat(10)
console.log(stars);
console.clear();

// FINAL TEAM CHALLENGE – Employee Report System
// let employees = [
//  { name: "Naveen", salary: 50000 },
//  { name: "Arun", salary: 30000 },
//  { name: "Kiran", salary: 70000 }
// ]
// Requirements:
// • Convert names to uppercase using map()
// • Filter salary > 40000
// • Find first salary > 60000
// • Calculate total salary using reduce()
// • Sort salaries descending


let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
]
// Convert names to uppercase using map()
let uppernames=employees.map((employee)=>{
    return employee.name.toUpperCase()
})
console.log(uppernames);
// Filter salary > 40000
let highsal=employees.filter((employee)=>{
    return employee.salary>40000
})
console.log(highsal);
// Find first salary > 60000
let fhsal=employees.find((employee)=>{
    return employee.salary>60000
})
console.log(fhsal);

//  Calculate total salary using reduce()
let totalSalary = employees.reduce((accumulator, employee) => {
    return accumulator + employee.salary
}, 0)
console.log(totalSalary); 

// Sort salaries descending
let sortedEmployees = employees.sort((a, b) => {
    return b.salary - a.salary
})
console.log(sortedEmployees); 

console.clear();

// TASK 7 – Sorting Problem
// let prices = [100, 5, 25, 300, 45]
// Requirements:
// 1. Sort in ascending order properly.
// 2. Sort in descending order properly.
// (Note: Use compare function)


let prices1 = [100, 5, 25, 300, 45]
// Sort in ascending order properly.
let asc=prices1.sort((a,b)=>{
    return a-b
})
console.log("Ascending order",asc);
// 2. Sort in descending order properly.
let desc=prices1.sort((a,b)=>{
    return b-a
})
console.log("Descending order",desc);
console.clear();

// BONUS HARD TASK – Team Level
// let users = [
// {name: "A", salary: 20000},
// {name: "B", salary: 40000},
// {name: "C", salary: 30000}
// ]
// Requirements:
// 1. Increase everyone salary by 5000 using spread.
// 2. Return new updated array.
// 3. Sort based on salary (high to low).

let users = [
    {name: "A", salary: 20000},
    {name: "B", salary: 40000},
    {name: "C", salary: 30000}
]

// 1. Increase everyone salary by 5000 using spread
// 2. Return new updated array
let updatedUsers = users.map((user) => {
    return {...user, salary: user.salary + 5000}
})
console.log("After salary increase:", updatedUsers);

// 3. Sort based on salary (high to low)
let sortedUsers = updatedUsers.sort((a, b) => {
    return b.salary - a.salary
})
console.log("Sorted by salary (high to low):", sortedUsers);
