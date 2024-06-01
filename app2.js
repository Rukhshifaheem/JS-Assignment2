// Chapter#14-16/Q1
let studentNames = [];
// Chapter#14-16/Q2
let StudentNames = new Array();
// Chapter#14-16/Q3
let staffNames = ["Ahmed", "Baber", "Farhan", "Daud", "Imran"];
console.log (staffNames);
// Chapter#14-16/Q4
let numbers = [1, 2, 3, 4, 5];
console.log (numbers);
// Chapter#14-16/Q5
let booleanArray = [true, false, true, false];
console.log(booleanArray);
// Chapter#14-16/Q6
let mixedArray = [1, "hello", 3, true, false, "Beenish"];
console.log(mixedArray);
// Chapter#14-16/Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Qualifications:")
console.log("1) " + qualifications[0]);
console.log("2) " + qualifications[1]);
console.log("3) " + qualifications[2]);
console.log("4) " + qualifications[3]);
console.log("5) " + qualifications[4]);
console.log("6) " + qualifications[5]);
console.log("7) " + qualifications[6]);
console.log("8) " + qualifications[7]);
// Chapter#14-16/Q8
let students = ["Michael", "John", "Tony", "BS"];
let scores = [320, 230, 480];
let totalMarks = 500
let per1 = scores[0]/totalMarks*100
let per2 = scores[1]/totalMarks*100
let per3 = scores[2]/totalMarks*100
console.log("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + per1 + "%")
console.log("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + per2 + "%")
console.log("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + per3 + "%")
// Chapter#14-16/Q9
let colors = ["Red", "Blue", "Green", "Yellow"];
document.write(colors + "<br/>");
let firstColor = prompt("what color you want to add to the beginning");
colors.unshift(firstColor);
document.write(colors + "<br/>");
let lastColor = prompt("what color you want to add to the end");
colors.push(lastColor);
document.write(colors + "<br/>");
colors.unshift("orange", "peach");
document.write(colors + "<br/>");
colors.shift();
document.write(colors + "<br/>");
colors.pop();
document.write(colors + "<br/>");
let index = prompt("At which index you want to add a color.");
let Color = prompt("what color you want to add");
colors.splice(index, 0, Color);
document.write(colors + "<br/>");
let index1 = prompt("At which index you want to delete a color.");
let del = prompt("How many colors you want to delete");
colors.splice(index1, del);
document.write(colors + "<br/>");
// Chapter#14-16/Q10
let scoreOfStudents = [320, 230, 480, 120];
scoreOfStudents.sort();
console.log("Ordered scores of students: " + scoreOfStudents); 
// Chapter#14-16/Q11
let cities = ["Karachi", "Lahore", "sibi", "Multan", "Islamabad", "Quetta"]
selectedCities = cities.slice(2,5)
console.log("cities list: " + cities);
console.log("Selected cities list: " + selectedCities);
// Chapter#14-16/Q12
let arr = ["This ", "is ", "my ", "cat"];
console.log("Array: " + arr)
console.log("String: " + arr[0] + arr[1] + arr[2] + arr[3])
// Chapter#14-16/Q13
let fifoArray = [];
fifoArray.push("keyboard");
console.log(fifoArray);
fifoArray.push("mouse");
console.log(fifoArray);
fifoArray.push("printer");
console.log(fifoArray);
fifoArray.push("monitor");
console.log(fifoArray);
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift());
console.log(fifoArray);
// Chapter#14-16/Q14
let lifoArray = [];
lifoArray.push("keyboard");
console.log(lifoArray);
lifoArray.push("mouse");
console.log(lifoArray);
lifoArray.push("printer");
console.log(lifoArray);
lifoArray.push("monitor");
console.log(lifoArray);
console.log(lifoArray.pop()); 
console.log(lifoArray.pop()); 
console.log(lifoArray.pop()); 
console.log(lifoArray.pop());
console.log(lifoArray);
// Chapter#14-16/Q15
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let dropdownHTML = '<select name="manufacturers">';
for (var i = 0; i < manufacturers.length; i++) {
    dropdownHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
    }
    dropdownHTML += '</select>';
document.write(dropdownHTML);
        