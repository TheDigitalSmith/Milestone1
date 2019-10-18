/*  21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"*/
var X = "John";
var Y = "Doe";
console.log( X + Y);

/* 22) Create an object with properties such Name, Surname, Email */

var person = {
    Name: "John",
    Surname: "Doe",
    Email: "john.doe@gmail.com"
};

/*23) Delete Email from the previously created object */
delete person.Email;

/* 24) Create an array with 10 strings in it */

var colour = Array ["red","green","blue","yellow","orange","purple","crimson","black","white","brown"]

/* 25) Print in the console every string in the previous array */

console.log(colour)

/* 26) Create an array with 100 random numbers in it */
var randoms = [Array(100)].map(() => Math.floor(Math.random() * 100));

document.body.innerText = randoms;

/* 27) Write a function to get the MAX and the MIN from the previously created array*/


