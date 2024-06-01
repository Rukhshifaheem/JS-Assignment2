// Chapter#12-13/Q1
let char = prompt("write a character (number 0r string)")
if (char >= "a" && char <= "z") {
    alert("Given character is lower case letter.")
}
else if (char >= "A" && char <= "Z") {
    alert("Given character is upper case letter.")
}
else if (char >= 0 && char <= 9 && char !== "") {
    alert("Given character is a number.")
}
// Chapter#12-13/Q2
let int1 = prompt("Enter an integer")
let int2 = prompt("Enter another integer")
if (int1 > int2) {
    alert(int1 + " \nIt is greater one.")
}
else if (int2 > int1) {
    alert(int2 + " \nIt is greater one.")
}
else if (int2 === int1 && int1 !== "" && int2 !== ""){
    alert("Both the integers are equal.")
}
// Chapter#12-13/Q3
let Num = prompt("Enter a number")
if (Num > 0) {
    alert("Number is positive.")
}
else if (Num < 0) {
    alert("Number is negative.")
}
else if (Num === 0 && Num !== ""){
    alert("Number is 0.")
}
// Chapter#12-13/Q4
let string = prompt("Write a character (i.e. string of length 1)")
if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u")     {alert("True.")
}
else {
    alert("False.")
}
// Chapter#12-13/Q5
let correctPassword = "Saylani"
let userPassword = prompt("Enter password")
if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password")
}
else if (userPassword !== correctPassword && userPassword !== "") {
    alert("Incorrect password")
}
else if (userPassword === "") {
    userPassword = prompt("Please enter your password")
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password")
} else {
    alert("Incorrect password")
}
}
// Chapter#12-13/Q6
let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);
// Chapter#12-13/Q7
let time = prompt("Enter the exact time in 24 hours clock format.")
if (time >= 0 && time < 12 ) {
    alert("Good morning!")
}
else if (time >= 12 && time < 17) {
    alert("Good afternoon!")
}
else if (time >= 17 && time < 21) {
    alert("Good evening!")
}
else {
    alert("Good night!")
}
