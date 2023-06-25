// Add your JavaScript code here
console.log("Hello, World!");
let name = "Jared Hamm";
console.log(name);

function add(a, b){
    return a+b
}

let sum = add(2, 5);

console.log(sum);

let person = {
    name: "Jared",
    age: 37,
    talks: function (words){
        console.log(`Hello, how are you, ${words}`)
    }
}


// Add your JavaScript code here
console.log("Hello, World!");

// Get the current date
var currentDate = new Date();

// Format the date as desired (e.g., "June 24, 2023")
var formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

// Find the element with the id "date" in the HTML and update its content
var dateElement = document.getElementById("date");
dateElement.textContent = formattedDate;
