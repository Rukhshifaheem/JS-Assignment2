// Chapter#21-25/Q1
let firstName = prompt("Enter your first name.")
let lastName = prompt("Enter your last name.")
let fullName = firstName + " " + lastName
if(firstName !== "" && lastName !== "") {
alert("Hi " + fullName + "! Welcome to our website.")
}
// Chapter#21-25/Q2
let favoriteModel = prompt("Enter your favorite mobile phone model:");
    document.write("My favorite phone is: " + favoriteModel + "<br>");
    document.write("Length of string: " + favoriteModel.length + "<br>");
// Chapter#21-25/Q3
let word = "Pakistani"
let index1 = word.indexOf('n')
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index1 + "<br>")
// Chapter#21-25/Q4
let phrase = "Hello World";
let lastIndex = phrase.lastIndexOf('l');
document.write("String: " + phrase + "<br>");
document.write("Last index of 'l': " + lastIndex + "<br>")
// Chapter#21-25/Q5
let word1 = "Pakistani";
let character = word1.charAt(3);
document.write("String: " + word1 + "<br>");
document.write("Character at index 3: " + character + "<br>")
// Chapter#21-25/Q6
let FirstName = prompt("Enter your first name.")
let LastName = prompt("Enter your last name.")
let Fullname = FirstName.concat(" ", LastName);
if(FirstName !== "" && LastName !== "") {
alert("Hi " + Fullname + "! Welcome to our website.")
}
// Chapter#21-25/Q7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>")
// Chapter#21-25/Q8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("Message before replacement: " + message + "<br>");
document.write("Message after replacement: " + newMessage + "<br>")
// Chapter#21-25/Q9
let string = "472";
let num1 = parseInt(string);
document.write("Value: " + string + "<br>");
document.write("Type: " + typeof(string) + "<br>");
document.write("Value: " + num1 + "<br>");
document.write("Type: " + typeof(num1) + "<br>");
// Chapter#21-25/Q10
let userInput = prompt("Enter any word in small letters.")
let upperCase = userInput.toUpperCase();
if (userInput !== "") {
alert(upperCase);
}
// Chapter#21-25/Q11
let favFood = prompt("What is your favourite food?")
let titleCase = favFood.slice(0, 1).toUpperCase() + favFood.slice(1).toLowerCase()
alert(titleCase);
if (favFood !== "") {
alert(titleCase);
}
// Chapter#21-25/Q12
let number = 35.36;
let numStr = number.toString();
let newNumStr = numStr.replace('.', '');
document.write("Number: " + number + "<br>");
document.write("Result: " + newNumStr + "<br>");
document.write("Type: " + typeof(newNumStr) + "<br>");
// Chapter#21-25/Q13
let UserName = prompt("Please enter username.")
let found = false
for (let i=0; i < UserName.length; i++) {
    if (UserName.slice(i, i + 1) === "!" || UserName.slice(i, i + 1) === "." || UserName.slice(i, i + 1) === "," || UserName.slice(i, i + 1) === "@") {
        found = true
    }
}
if (found === true) {
    alert("Enter a valid username")
}
else {
    alert("Username is valid")
}
// Chapter#21-25/Q14
let bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"]
let item = prompt("Welcome to ABC bakery. What do you want to order?").toLowerCase();
let matchFound = false;
let index = -1;
for (let i = 0; i < 5; i++) {
if (item === bakeryItem[i].toLowerCase()) {
matchFound = true;
index = i;
break;
} 
}
if (matchFound === true) {
    alert(bakeryItem[index] + " is available at index " + index + " in our bakery.");
    }
else {
alert("We are sorry." + item + " is not available in the bakery.");
}
// Chapter#21-25/Q15
let password = prompt("Enter your password")
let match = false
for (let i = 0; i < password.length; i++) {
    if (password.length >= 6 && isNaN(password.charAt(0)) && /[a-zA-Z]/.test(password) && /\d/.test(password)) 
    match = true
    break;
}
if (match === true) {
    alert("Password is valid")
}
if (match === false) {
    password = prompt("Enter a valid password:") 
    for (let i = 0; i < password.length; i++) 
    if (password.length >= 6 && isNaN(password.charAt(0)) && /[a-zA-Z]/.test(password) && /\d/.test(password)) 
       { match = true;
        break;
}
}
if (match === true) {
    alert("Password is valid")
}
else {
    alert("Invalid password")
}
// Chapter#21-25/Q16
let university = "University of Karachi";
let array = university.split('');
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>");
}
// Chapter#21-25/Q17
let enter = prompt("Enter a string:");
if (enter.length > 0) {
let lastCharacter = enter.charAt(enter.length - 1);
alert("The last character of your input is: " + lastCharacter);
} 
else {
    alert("You entered an empty string.");
}
// Chapter#21-25/Q18
let sentence = "The quick brown fox jumps over the lazy dog";
let lowerCaseSentence = sentence.toLowerCase();
let words = lowerCaseSentence.split(" ");
let count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("Text: " + sentence + "<br/>");
document.write("There are " + count + " occurence(s) of word 'the'" + "<br/>");