// 1. Welcome Program
// - Ask user name using prompt().
// - Show alert: Hi , Welcome to JavaScript Training.
// - Print the same message in console.

let username = prompt("what is ur username");
let message = "Hi welcome to javascript training";
alert(message);
console.log(message);
console.clear();

// 2. Console Methods Practice
// - Print 500 using console.log(), console.warn(), console.error().
// - Use console.clear().

console.log(500);
console.warn(500);
console.error(500);
console.clear();

// 3. Data Type Identification
// - Create string, number, boolean, undefined, and null variables.
// - Print value and type using typeof.

let str1 = "mango";
console.log(str1);
console.log(typeof(str1));

let num1 = 30;
console.log(num1);
console.log(typeof(num1));

let boo1 = true;
console.log(boo1);
console.log(typeof(boo1));

let undef1;
console.log(undef1);
console.log(typeof(undef1));

let nul = prompt("Click Cancel to see null:");
console.log(nul);
console.log(typeof(nul));
console.clear();

// 4. Arithmetic Operations
// - Use let a = 20 and let b = 5.
// - Perform +, -, *, /, %, ** and print results.

let a = 20;
let b = 5;

let add = a + b;
console.log("Addition:", add);

let sub = a - b;
console.log("Subtraction:", sub);

let mul = a * b;
console.log("Multiplication:", mul);

let div = a / b;
console.log("Division:", div);

let mod = a % b;
console.log("Modulus:", mod);

let exp = a ** b;
console.log("Exponentiation:", exp);
console.clear();

// 5. Increment & Decrement
// - Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
// - Print variables clearly.

// PRE (`++var` or `--var`): Change happens FIRST → Both variables get the SAME (new) value
// POST (`var++` or `var--`): Change happens AFTER → Variables get DIFFERENT values

// Pre-increment
let c = 10;      // c = 10
let d = ++c;     // ++c → c = 11, d = 11
console.log("Pre-increment: c =", c, ", After Pre-increment d =", d);

// Post-increment
let e = 10;      // e = 10
let f = e++;     // e++ → f = 10, e = 11
console.log("Post-increment: e =", e, ", After Post-increment f =", f);

// Pre-decrement
let g = 10;      // g = 10
let h = --g;     // --g → g = 9, h = 9
console.log("Pre-decrement: g =", g, ", After Pre-decrement h =", h);

// Post-decrement
let i = 10;      // i = 10
let j = i--;     // i-- → j = 10, i = 9
console.log("Post-decrement: i =", i, ", After Post-decrement j =", j);
console.clear();

// 6. Assignment Operators
// - Use let num = 10.
// - Perform +=, -=, *=, /=, %= and print results.

let num = 10;                     // num = 10
console.log("Initial value: num =", num);

let add1 = num;                   // add1 = 10
add1 += 5;                        // add1 = add1 + 5, add1 = 10 + 5 = 15
console.log("After += 5: add1 =", add1);

let sub1 = num;                   // sub1 = 10
sub1 -= 3;                        // sub1 = sub1 - 3, sub1 = 10 - 3 = 7
console.log("After -= 3: sub1 =", sub1);

let mul1 = num;                   // mul1 = 10
mul1 *= 2;                        // mul1 = mul1 * 2, mul1 = 10 * 2 = 20
console.log("After *= 2: mul1 =", mul1);

let div1 = num;                   // div1 = 10
div1 /= 4;                        // div1 = div1 / 4, div1 = 10 / 4 = 2.5
console.log("After /= 4: div1 =", div1);

let mod1 = num;                   // mod1 = 10
mod1 %= 3;                        // mod1 = mod1 % 3, mod1 = 10 % 3 = 1
console.log("After %= 3: mod1 =", mod1);
console.clear();

// 7. Array Access
// - Create array ['HTML','CSS','JavaScript','React'].
// - Print first element, second element, last element (using length), and total elements.

let tech = ['HTML', 'CSS', 'JavaScript', 'React'];
console.log("Entire array values:", tech);
console.log("First element:", tech[0]);
console.log("Second element:", tech[1]);
console.log("Last element using length:", tech[tech.length - 1]);
console.log("Total number of elements:", tech.length);
console.clear();

// 8. Modify Array
// - Add one element at end.
// - Remove last element.
// - Print updated array.

let tech2 = ['HTML', 'CSS', 'JavaScript', 'React'];
console.log("Original array:", tech2);

// Add one element at end
tech2[tech2.length] = 'Node.js';
console.log("After adding element at end:", tech2);

// Remove last element
tech2.length = tech2.length - 1;
console.log("After removing last element:", tech2);

// Print updated array
console.log("Updated array:", tech2);
console.clear();

// 9. Student Object
// - Create object with name, age, course, city.
// - Print values using dot notation.

let student = {
    name   : "Ramu",
    age    : 20,
    course : "JS",
    city   : "Coimbatore"
}

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Course:", student.course);
console.log("Student City:", student.city);
console.clear();

// 10. Nested Object Practice
// - Create company object with nested trainer object.
// - Print company name, trainer name, trainer subject.

let company = {
    companyName : "XYZ Company",
    location    : "Chennai",
    role        : {
        name       : "Kumar",
        position   : "Full Stack Developer",
        experience : 5
    }
}

console.log("Company Name:", company.companyName);
console.log("Company Location:", company.location);
console.log("Trainer Name:", company.role.name);
console.log("Trainer Position:", company.role.position);
console.log("Trainer Experience:", company.role.experience);