//Übung um einen Satz zu erstellen mit eingaben.
//Muss in Google Chrome Console reinkopiert werden

console.log("lets create a sentence");

function sentence (name,color) {

console.log("Your name is: " + q1 + " and your favorite color is: " + q2);

}

//sentence(q1,q2)


console.log("lets create an operation");


//var q3 = prompt("please write down a numer")
//var q4 = prompt("please write down another numer")

/*
function operation (num1, num2) {
console.log("multiplication of numbers: " + (parseInt(num2,10)*parseInt(num2,10)));
console.log("addition of numbers: " + (parseInt(num1,10)+parseInt(num2,10)));
console.log("subtraction of numbers: " + (parseInt(num1,10)-parseInt(num2,10)));
console.log("division of numbesr: " + (parseInt(num1,10)/parseInt(num2,10)));

}
*/

function operation (num1, num2) {

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

console.log("multiplication of numbers: " + (num1*num2));
console.log("addition of numbers: " + (num1+num2));
console.log("subtraction of numbers: " + (num1-num2));
console.log("division of numbers: " + (num1/num2));

}
//operation(q3,q4)

var q1 = prompt("please write down a name");
var q2 = prompt("please write down your favorite color");
var q3 = prompt("please write down a number");
var q4 = prompt("please write down another number");


function both(name,color,num1,num2){
sentence(name,color);
console.log("The selected numbers are "+ num1 +" and " + num2);
operation(num1,num2);

}

both(q1,q2,q3,q4);


/*
both(q1,q2,q3,q4)
VM92:4 lets create a sentence
VM92:15 lets create an operation
VM92:8 Your name is: Magomed and your favorite color is: Blue
VM92:52 The selected numbers are 123 and 1234
VM92:36 multiplication of numbers: 151782
VM92:37 addition of numbers: 1357
VM92:38 subtraction of numbers: -1111
VM92:39 division of numbers: 0.09967585089141005
*/
