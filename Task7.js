// SECTION 1 – Date Object Tasks
// TASK 1 – Custom Digital Clock
// Create a live digital clock using:
// - new Date()
// - getHours()
// - getMinutes()
// - getSeconds()
// - setInterval()
// Format:
// Current Time: 14 : 05 : 09
// (Add leading zero if value < 10)


function showClock(){
    // new Date()
    let dt = new Date()
    // getHours()
    let h = dt.getHours()
    // getMinutes()
    let m = dt.getMinutes()
    // getSeconds()
    let s = dt.getSeconds()
    //  (Add leading zero if value < 10)
    if (h<10){
        h="0"+h
    }
    if (m<10){
        m="0"+m
    }
    if (s<10){
        s="0"+s
    }
    console.log(`current time:${h}:${m}:${s}`);
    // setInterval()
}
    setInterval(showClock,1000)



// TASK 2 – Find Current Day Name
// Use getDay()
// Array:
// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Print:
// Today is Friday

let date = new Date()
let dayindex = date.getDay()
let daynames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(`Today is ${daynames[dayindex]}`);

// TASK 3 – Age Calculator (Basic)
// let birthYear = 2003
// Use getFullYear()
// Print:
// Your age is 23

let birthyear =2003
let currentdate = new Date()
// Use getFullYear()
let currentyear = currentdate.getFullYear()
let age = currentyear-birthyear

console.log(`your age is ${age}`);
console.clear();

// TASK 4 – Create Specific Date
// Create:
// 15 August 2020
// 10:30:45 AM
// Using:
// - new Date()
// - setFullYear()
// - setMonth()
// - setDate()
// - setHours()
// - setMinutes()
// - setSeconds()
// Print using:
// toLocaleString()

let specificdate=new Date()
specificdate.setFullYear(2020)
specificdate.setMonth(7)
specificdate.setDate(15)
specificdate.setHours(10)
specificdate.setMinutes(30)
specificdate.setSeconds(45)
console.log(specificdate.toLocaleString());
console.clear();

// TASK 5 – Delayed Message
// Use setTimeout()
// After 3 seconds print:
// Welcome Naveen 
// Use setTimeout()

setTimeout(()=>{
    console.log("Welcome Naveen");
    
    
},3000)

// TASK 6 – Stop Interval After 5 Seconds
// Output:
// 1
// 2
// 3
// 4
// 5
// Stopped
// Use:
// - setInterval()
// - clearInterval()

let count = 0
//  setInterval()

let intervalId = setInterval(()=>{
    count++
    console.log(count);
    if(count ===5){
        // Stopped

        console.log("Stopped");
        // clearInterval()

        clearInterval(intervalId)
        
    }
    
},1000)

// TASK 7 – Simple Promise
// If number > 10 ® resolve("Valid number")
// Else ® reject("Invalid number")
// Handle using:
// .then()
// .catch()
// .finally()

let num = Number(prompt("Enter a number"))
let prom = new Promise((resolve,reject)=>{
    // If number > 10 ® resolve("Valid number")
    if (num>10){
        resolve("Valid number" )
        // Else ® reject("Invalid number")
    }else{
        reject("Invalid number ")
    }
    })
    prom
    // .then()

    .then((result)=>{
        console.log(result);
        
    })
    // .catch()
    .catch((error)=>{
        console.log(error);
        
    })
    
    .finally(()=>{
        console.log("Promise completed");
        
    })


// TASK 8 – Fetch Product Prices
// API:
// https://fakestoreapi.com/products
// Print only:
// Product: <title>
// Price: <price>

let api = "https://fakestoreapi.com/products"
fetch(api)
.then((response)=>{
    return response.json()
})
.then((products)=>{
    products.forEach((products)=>{
        console.log(`Product:${products.title}`);
        console.log(`price:${products.price}`);

        
        
    })
})
.catch((error)=>{
    console.log(error);
    
})


// SECTION 5 – Execution Order Task
// function one(){
// console.log("one");
// }
// function two(){
// console.log("two");
// }
// function three(){
// console.log("three");
// }
// one()
// setTimeout(two,0)
// three()
// Predict Output and Explain Why.
function one(){
console.log("one");
}
function two(){
console.log("two");
}
function three(){
console.log("three");
}
one()
setTimeout(two,0)
three()

// Predict Output
one
three
two 
// Explain Why.
// JS has two types of code execution:
//synchronous code - excutes immediately in order(one,three)
// asynchronous code -excutes after sysnchronous code completes(two)
//settmeout is asynchronous eve withe 0 ms delay 
//goes to call back queue ad waits for sysnchronous code to finish
// event loop runs sysnchrouns tasks 1 st , the asynchronous tasks 