
// test
console.log("hello");


//LESSON TASK 1.1

//Q1
const instrument = "guitar";
console.log (instrument);

//Q2
const button = document.querySelector("button.login");
console.log (button);

//Q3
const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];
console.log (instruments);

//Q4
const name = "Percival";
let age = 13;

console.log (name);
console.log (age);

//Q5 
let total = 0;
total = total + 10;

console.log (total);

//Q6
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log()
//dont understand

//Q7
const firstName = "Florence";

const introduction = `Hello, my name is ${firstName}.`;

console.log(introduction);


//Q8
const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!

This ${title} is starting today.

Have a ${whatToHave}!`;

console.log(welcome);

//Q9
const car = {
    "paint-colour": "red",
    "number of wheels": 3
};
console.log (car["paint-colour"]);
console.log (car["number of wheels"]);

//Q10
const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false,
    getExpired: function() {
        console.log(this.expired);
    }
};
product.getExpired();

