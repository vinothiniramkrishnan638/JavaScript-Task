// // Q1: Check whether a number is between 10 and 50 using logical AND.
// // Input: let num = 25
// // Output: "Valid Number" or "Invalid Number"

let num = 25
if (num >= 10 && num <= 50) {
    console.log("Valid Number");

} else {
    console.log("Invalid Number");

}
// console.clear()
// // Q2: Check if a user is eligible to log in.
// // Condition:
// // username must be "admin"
// // password must be "1234"
// // Use logical AND.

let username = "admin"
let Password = "1234"
if (username === "admin" && Password === "1234") {
    console.log("Eligible to log in ");

} else {
    console.log("Not Eligible to log in ");

}
// console.clear()
// // Q3: Using ternary operator:
// // Check if a number is even or odd.

let num1 = prompt("Enter a number ");
    (num1 % 2 === 0) ? console.log
    ("The given number is Even ") : console.log
    ("The given number is Odd");
// console.clear()

// //    Q4: What is the output?
// // console.log((10 === "10") || (5 > 2) && !(3 < 1));
// // Explain step by step. 
console.log((10 === "10") || (5 > 2) && !(3 < 1));
// // explaination:
// 10 === "10" =false because   number is same but the datatype is different
// 5 > 2 =true because 5 is greater then 2 
// !(3 < 1)=!(false) [because 3 is not lesser then 1]
// (10 === "10") || (5 > 2) && !(3 < 1)
// (false)        ||(true)   &&!(fasle)
// (false)        ||(true)   &&(true)
// (false)        ||     (true)   
//output is true 
// console.clear()

// Q5: Find the output and explain:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);

console.log("5" + 2);//step 1 -"5"+2 (2is convert in to string )//step2-"5"+"2"="52"
//output :52

console.log("5" - 2);//step 1-"5"-2("5" is converted into number )//step2-5-2=3
//output :3
console.log("5" * 2);//step 1 -"5"*2("5" is converted into number)//step2-5*2=10
//output:10
console.log("5" / 2);//ste 1- "5"/2("5" is converted into number)//step2- 5/2=2.5
//output :2.5
// console.clear()
// // Q6: Convert the following using explicit conversion:
// // let value = "100";
// // - Convert to Number
// // - Convert to Boolean


let value ="100";
console.log(Number(value));
console.log(Boolean(value));

// // Q7: What will be the output?
// // console.log(Boolean(""));
// // console.log(Boolean(" "));
// // console.log(Boolean(0));
// // console.log(Boolean([]));
// // Explain why.
console.log(Boolean(""));//empty string value in boolean is false 
console.log(Boolean(" "));//not empty string value in boolean is true 
console.log(Boolean(0));//in boolean 0 value is false 
console.log(Boolean([]));//Array is object, object value in boolean is true

// // Q8: Write a program:
// // If marks >= 90 ® Grade A
// // If marks >= 75 ® Grade B
// // If marks >= 50 ® Grade C
// // Else ® Fail
// // Use if else if.

let mark=Number(prompt("Enter the mark" ))
if (mark >=90){
    console.log("Grade A");
    alert("Grade A")

}else if(mark>=75){
console.log("Grade B");
alert("Grade B")

}else if(mark>=50){
console.log("Grade C");
alert("Grade C")

}else{
console.log("Fail");
alert("Fail")

}

// Q9: Traffic Signal Program using switch case:
// "red" ® Stopc
// "yellow" ® Ready
// "green" ® Go
// Default ® Invalid Signal

let signal = prompt("Enter the traffic signal color(Red/Yellow/Green)").toLowerCase();
switch (signal) {
    case "red":
        console.log("stop stop");

        break;
    case "yellow":
        console.log("Ready Ready ");

        break;
    case "green":
        console.log("Goo Goo");

        break;
    default:
console.log("Invalid signal colors ");

        break;
}

// Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true ® "Selected"
// Else ® show which condition failed.

let age = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height (cm)"));
let weight = Number(prompt("Enter your weight (kg)"));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("You are selected");
        } else {
            console.log(`Your weight is ${weight}kg, it's not enough for selection`);
        }
    } else {
        console.log(`Your height is ${height}cm, it's not enough for selection`);
    }
} else {
    console.log(`Your age is ${age} years old, it's not enough for selection`);
}

// Q11: Print numbers from 1 to 20 using for loop.

for (let i = 1; i <= 20; i++) {
    console.log(i);

}
// console.clear()

// Q12: Print only odd numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }


}
// console.clear()
// Q13: Using while loop:
// Print numbers from 10 to 1.


let value1 =10
while (value1>=1) {
console.log(value1);
   value1-- 
}
// console.clear()

// Q14: Using do-while loop:
// Print numbers from 1 to 5.

let value2 = 1
do {
    console.log(value2);
    value2++
    
} while (value2<=5);
// console.clear()
// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"

let word = "STACKLY"
for(let a of word){
    console.log(a);
    
}

// console.clear()
// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }

let student = {
name: "Arun",
course: "MERN",
duration: "6 months"
}
for (let b in student) {
    
    console.log(`${b}: ${student[b]}`);
    
    
}
// console.clear()
// Real-Time Questions
// RT-1: Login System
// If username = "admin" AND password = "1234" ® "Login Success"
// Else ® "Invalid Credentials"
// Use logical operator + ternary.
let username1 = prompt("Enter the username");
let password1= prompt("Enter the password");
(username1==="admin"&&password1==="1234")
?console.log("Login Success"):console.log("Invalid Credentials");
// console.clear()

// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// ® Eligible for bonus
// Else ® Not eligible

let salary1 =Number( prompt("Enter Your Salary"));
let experience1=Number(prompt("Enter your Experience(year)"));
if (salary1>50000 && experience1>3) {
    console.log("Eligible for bonus");
    
    
} else {
    console.log("Not Eligible");
    
}

// console.clear()

// RT-3: Shopping Discount
// If cart amount:
// >= 5000 ® 20% discount
// >= 2000 ® 10% discount
// < 2000 ® No discount
// Use if-else if

let cartamount = Number(prompt("Enter the Amount"))
if(cartamount>=5000){
    console.log("20% discount")
}else if (cartamount>=2000) {
    console.log("10%discount");
    
} else {
    console.log("No discount");
    
}

// console.clear()
// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.

let ec =0
for(let i =1;i<=50;i++){
    if(i%2===0){
        ec++
    }
}console.log(`Total even numbers:${ec}`);
// console.clear()
// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 ® Good Morning
// 7–12 ® Morning
// 13–16 ® Good Afternoon
// 17–19 ® Good Evening
// Else ® Good Night

let hr=Number(prompt("Enter the hour in (1 to 24)"));
if(hr>=1&&hr<=6){
    console.log("Good Morning");
    
} else if(hr>=7&&hr<=12){
    console.log("Morning");
    
}else if(hr>=13&&hr<=16){
    console.log("Good Afternoon");
    
}else if(hr>=17&&hr<=19){
    console.log("Good Evening");
    
}else{
    console.log("Good Night ");
    
}