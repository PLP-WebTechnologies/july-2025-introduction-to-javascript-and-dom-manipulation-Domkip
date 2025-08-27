
// Part 1: JavaScript Basics


// Variable declarations
let name = "John";
let age = 20;
let isStudent = true;

// Conditional

if (isStudent && age >= 18) {
  console.log(name + " is an adult student.");
} else {
  console.log(name + " is not an adult student.");
}

// Another conditional example
let score = 75;
if (score >= 80) {
  console.log("Excellent work!");
} else if (score >= 50) {
  console.log("Good job, keep improving!");
} else {
  console.log("Needs more practice.");
}

// Part 2: Functions


// 1. Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total: $" + calculateTotal(10, 3));

// 2. Arrow function to format a greeting
let greet = (username) => {
  return `Hello, ${username}! Welcome back.`;
};
console.log(greet("Mary"));


// 🔁 Part 3: Loops


let students = ["John", "Jane", "Mark"];

// For loop
for (let i = 0; i < students.length; i++) {
  console.log("Student " + (i + 1) + ": " + students[i]);
}

// forEach loop
students.forEach((student) => {
  console.log("Hello " + student);
});


// 🌐 Part 4: DOM Manipulation


// 1. Change text content
function changeText() {
  let title = document.getElementById("title");
  title.textContent = "Sasa, this is the Swahili version!";
  title.style.color = "red";
}

// 2. Toggle message visibility
function toggleMessage() {
  let msg = document.getElementById("message");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
}

// 3. Add new student to the list
function addStudent() {
  let studentList = document.getElementById("studentList");
  let newStudent = document.createElement("li");
  newStudent.textContent = "New Student " + (studentList.children.length + 1);
  studentList.appendChild(newStudent);
}
