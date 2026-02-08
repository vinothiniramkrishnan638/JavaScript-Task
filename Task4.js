// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calsalary(basicSalary, bonusPercentage) {
    let bonus = (basicSalary * bonusPercentage) / 100;
    let grossSalary = basicSalary + bonus;
    let tax = (grossSalary * 5) / 100;
    let finSalary = grossSalary - tax;
    
    console.log(`Basic salary : ₹${basicSalary}`);
    console.log(`Bonus(${bonusPercentage}%) : ₹${bonus}`);
    console.log(`Gross salary : ₹${grossSalary}`);
    console.log(`Tax(5%) : ₹${-tax}`);
    console.log(`Final salary : ₹${finSalary}`);
    
    return finSalary;
}

let basicSalary = Number(prompt("Enter your basic salary: "));
let bonusPercentage = Number(prompt("Enter bonus percentage: "));

calsalary(basicSalary, bonusPercentage);

console.clear()

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

function generateResult(name, marksArray) {
    let total = 0;
    
    for (let i = 0; i < marksArray.length; i++) {
        total = total + marksArray[i];
    }
    
    let average = total / marksArray.length;
    
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }
    
    
    console.log(`Name     : ${name}`);
    console.log(`Marks    : ${marksArray}`);
    console.log(`Total    : ${total}`);
    console.log(`Average  : ${average}`);
    console.log(`Grade    : ${grade}`);
    
    
    let result = {
        name: name,
        total: total,
        average: average,
        grade: grade
    };
    
    return result;
}

let studentName = prompt("Enter student name: ");
let marks1 = Number(prompt("Enter marks for subject 1: "));
let marks2 = Number(prompt("Enter marks for subject 2: "));
let marks3 = Number(prompt("Enter marks for subject 3: "));
let marks4 = Number(prompt("Enter marks for subject 4: "));
let marks5 = Number(prompt("Enter marks for subject 5: "));

let marksArray = [marks1, marks2, marks3, marks4, marks5];

generateResult(studentName, marksArray);

console.clear()

// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }
// Questions:
// - What will happen?

// - Why?
// - Fix it properly.

//  - What will happen?
// console.log(a) print 10 values
// console.log(b) throw :ReferenceError: b is not defined
// - Why?
// var a - accessible a anywhere in function because is function scope 
// let b- block scope-only accessible inside the if block ,not accessible for the outside block

function demo(){
    if(true){
        var a = 10;
        let b = 20;
        console.log(a);  // 10
        console.log(b);  // 20
    }
}
demo();
console.clear();
// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// console.clear()
// output- undefined
// error- ReferenceError: Cannot access 'y' before initialization
//Because console.log(x); is undefined -var hoisted & initialize with undefined
// console.log(y);-Reference error let hosted but not initialize cannot access before declaration

// SECTION 3 – Callback & Higher Order (Industry Simulation)
// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function processOrd(ordId, callback) {
    console.log("Order Processed");
    callback(ordId);
}

function genInvoice(ordId) {
    console.log(`Invoice generated for Order ${ordId}`);
}

let ordId = Number(prompt("Enter Order ID"));

processOrd(ordId, genInvoice);
console.clear()

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()



function trans(amt, typ, callback) {
    let bal = 10000;
    let hasError = false;
    
    if (amt < 0) {
        alert("Error: Amount cannot be negative. Please enter positive value");
        console.log("Error: Amount cannot be negative");
        hasError = true;
    }
    
    if (typ !== "deposit" && typ !== "withdraw") {
        alert("Error: Invalid transaction type. Please enter 'deposit' or 'withdraw' only");
        console.log("Error: Invalid transaction type. Use 'deposit' or 'withdraw'");
        hasError = true;
    }
    
    if (hasError) {
        return;
    }
    
    if (typ === "deposit") {
        bal = bal + amt;
        console.log(`₹${amt} deposited successfully`);
        console.log(`New Balance: ₹${bal}`);
    } else if (typ === "withdraw") {
        if (amt > bal) {
            alert("Error: Insufficient balance");
            console.log("Error: Insufficient balance");
            return;
        }
        bal = bal - amt;
        console.log(`₹${amt} withdrawn successfully`);
        console.log(`New Balance: ₹${bal}`);
    }
    
    callback(amt, typ);
}

function sendMsg(amt, typ) {
    console.log(`SMS: ₹${amt} ${typ} transaction successful`);
}

let amt = Number(prompt("Enter amount: "));
let typ = prompt("Enter transaction type (deposit/withdraw): ");

trans(amt, typ, sendMsg);
console.clear()
// SECTION 4 – Currying (E-Commerce)
// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuild(base) {
    return function(disc) {
        return function(tax) {
            let hasError = false;
            
            if (base < 0) {
                alert("Error: Base price cannot be negative");
                console.log("Error: Base price cannot be negative");
                hasError = true;
            }
            
            if (disc < 0) {
                alert("Error: Discount cannot be negative");
                console.log("Error: Discount cannot be negative");
                hasError = true;
            }
            
            if (tax < 0) {
                alert("Error: Tax cannot be negative");
                console.log("Error: Tax cannot be negative");
                hasError = true;
            }
            
            if (hasError) {
                return;
            }
            
            let discAmt = (base * disc) / 100;
            let priceAfterDisc = base - discAmt;
            let taxAmt = (priceAfterDisc * tax) / 100;
            let finalPrice = priceAfterDisc + taxAmt;
            
            console.log(`Base Price        : ₹${base}`);
            console.log(`Discount (${disc}%)    : -₹${discAmt}`);
            console.log(`Price After Disc  : ₹${priceAfterDisc}`);
            console.log(`Tax (${tax}%)         : +₹${taxAmt}`);
            console.log(`Final Price       : ₹${finalPrice}`);
            
            return finalPrice;
        };
    };
}

let base = Number(prompt("Enter base price: "));
let disc = Number(prompt("Enter discount %: "));
let tax = Number(prompt("Enter tax %: "));

priceBuild(base)(disc)(tax);

console.clear()
// 8. Secure Company Module:

// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible
// SECTION 5 – IIFE (Security + Encapsulation)
// 8. Secure Company Module:
// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible


let compMod = (function() {
 let compCode = "ABC12345";    
    function getCompStatus() {
        console.log(`Company Code: ${compCode}`);
        console.log("Status: Active");
    }
    
    return {
        getCompStatus: getCompStatus
    };
})();

compMod.getCompStatus();
console.log(compMod.compCode);
console.clear()  

// SECTION 6 – Generator (Advanced Logic)
// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.

function*ordIdGen(){
    let ordId=1001;
    while(true){
        yield`ORD${ordId}`;
        ordId++;

    }
}
let ordGen=ordIdGen();
console.log(ordGen.next().value);
console.log(ordGen.next().value);
console.log(ordGen.next().value);
console.log(ordGen.next().value);
console.log(ordGen.next().value);
console.clear()

// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.


function*couponSpin(){
    yield"10% OFF";
    yield"20% OFF";
    yield"50% OFF";
    yield" No Luck";
    yield"Jackpot";

}
let spin=couponSpin();
console.log("Spin1:",spin.next().value);
console.log("Spin2:",spin.next().value);
console.log("Spin3:",spin.next().value);
console.log("Spin4:",spin.next().value);
console.log("Spin5:",spin.next().value);
console.log("Spin6:",spin.next().value);

console.clear()

let ecom = (function() {
    let cart = [];
    let cfg = {
        taxRate: 18,
        curr: "₹"
    };
    
    function addCart(prod, pr) {
        cart.push({ prod: prod, pr: pr });
        console.log(`${prod} added to cart at ${cfg.curr}${pr}`);
    }
    
    function calcTot() {
        let tot = 0;
        for (let i = 0; i < cart.length; i++) {
            tot = tot + cart[i].pr;
        }
        console.log(`Cart Total: ${cfg.curr}${tot}`);
        return tot;
    }
    
    function applyDisc(tot) {
        return function(discPer) {
            let disc = (tot * discPer) / 100;
            let finalPr = tot - disc;
            console.log(`Discount (${discPer}%): -${cfg.curr}${disc}`);
            console.log(`Price After Discount: ${cfg.curr}${finalPr}`);
            return finalPr;
        };
    }
    
    function* genCoup() {
        yield "SAVE10";
        yield "SAVE20";
        yield "SAVE30";
    }
    
    function procPay(amt, callback) {
        console.log(`Processing payment of ${cfg.curr}${amt}...`);
        console.log("Payment Successful!");
        callback();
    }
    
    function sendConf() {
        console.log("Order confirmation sent via SMS and Email");
    }
    
    return {
        addCart: addCart,
        calcTot: calcTot,
        applyDisc: applyDisc,
        genCoup: genCoup,
        procPay: procPay,
        sendConf: sendConf
    };
})();


let prod1 = prompt("Enter product 1 name: ");
let pr1 = Number(prompt("Enter product 1 price: "));
ecom.addCart(prod1, pr1);

let prod2 = prompt("Enter product 2 name: ");
let pr2 = Number(prompt("Enter product 2 price: "));
ecom.addCart(prod2, pr2);

let prod3 = prompt("Enter product 3 name: ");
let pr3 = Number(prompt("Enter product 3 price: "));
ecom.addCart(prod3, pr3);

console.log("---");

let tot = ecom.calcTot();

console.log("---");

let discPer = Number(prompt("Enter discount %: "));
let finalPr = ecom.applyDisc(tot)(discPer);

console.log("---");

let coupGen = ecom.genCoup();
console.log("Available Coupons:");
console.log(coupGen.next().value);
console.log(coupGen.next().value);
console.log(coupGen.next().value);


ecom.procPay(finalPr, ecom.sendConf);



// Concept Questions:
// 1. Difference between function declaration & expression?
// function declaration-can be used before declaration(hoisted)-has function name -eg
// function add(a,b){
//     return a+b;

// }
// function expression-cannot be used before declaration(not hoisted)-eg
// let add1=function(a,b){
//     return a+b;
// };




// 2. What is higher order function?
// function that takes another function as parameter or returns a function
// eg:
// function processOrder(orderId,callback){ 
// console.log("Order processing");
//     callback(orderId);
// }
// function sendEmail(orderId) {
//     console.log(`Email sent for order ${orderId}`);
// }
// processOrder(123, sendEmail);
// 


// 3. Real-time example of generator?
//used to generate unique ID in real time applications
//function*orderIdGen(){
// let id =1001;
// while(true){
//     yield`ORD${id}`;
//     id++;
// }
// }
// let order=orderIdGen();
// console.log(order.next().value);
//console.log(order.next().value);



// 4. Why do we use IIFE?
// used to create private variables ,avoid global scope pollution
// data privacy variables inside IIFE cannot be accessed from outside 

// 5. Difference between var, let, const?
// var-function scope ,hoisted undefined value, can be redeclared &updated
//let-block scope,hoisted not initialized,cannot be redeclared but can be updated
//const -block scope,hoisted but not initialized ,cannot be redeclared ,cannot be updated 
