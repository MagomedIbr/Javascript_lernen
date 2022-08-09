//Muss in Google Chrome Console reinkopiert werden

//Login
console.log("Hello welcome to the food app");
console.log("Lets create an account");


var userName = prompt("Please create a Username");
var pass = prompt ("Please create a Password");
console.log("Thank you! Your account has been created.");

console.log("Please enter your login information");
var tryUserName = prompt("Username: ");
var tryPass = prompt ("Password: ");

while(tryUserName!=userName || tryPass!=pass){
console.log("Username or Password is Wrong please try again");
var tryUserName = prompt("Username: ");
var tryPass = prompt ("Password: ");
}
console.log("You have sucesfully loged in");

//Geld in das Konto hinzufügen.
var balance = 10;

console.log("Your current ballance is " + balance + "$");
var q1 = prompt("Would you like to add money to your account?");

if(q1=="yes" || q1 == "Yes"){
var balance = parseInt(prompt("Please enter the ammount you want to add")) +balance;
console.log("Your current ballance is " + balance + "$");
}
else if (q1!="yes" || q1 != "Yes"){
console.log("Have a good day!");
console.log("Your current ballance is " + balance + "$");
}

//Will der Nutzer einen Burger
var q2 = prompt("Would you like a Burger?");
//var balance = 10
if(q2=="yes" || q2 == "Yes"){

console.log("Please choose what Burger you want");
var burgertypes = ["Cheeseburger","Hamburger", "Chickenburger"];
var burgerprice = [3,2.50,3.50];

for(i=0;i<=2;i++){
console.log("Choice " + (i+1) + ": " + burgertypes[i] + " for " + burgerprice[i]+ "$");
}

console.log("Your current ballance is " + balance + "$");

var burger = prompt("Please choose which Burger you want");

if(burger==1 || burger == "Cheeseburger"){
console.log("Thank you for buying a " + burgertypes[0]);
balance = balance-burgerprice[0];
console.log("Your new ballance is " + balance + "$");
}
if(burger==2 || burger == "Hamburger"){
console.log("Thank you for buying a " + burgertypes[1])
balance = balance-burgerprice[1]
console.log("Your new ballance is " + balance + "$");
}
if(burger==3 || burger == "Chickenburger"){
console.log("Thank you for buying a " + burgertypes[2]);
balance = balance-burgerprice[2];
console.log("Your new ballance is " + balance + "$");
}
}

else if (q2!="yes" || q2 != "Yes"){
console.log("Have a good day!");
}

// Hello welcome to the food app
// VM131:5 Lets create an account
// VM131:10 Thank you! Your account has been created.
// VM131:12 Please enter your login information
// VM131:21 You have sucesfully loged in
// VM131:26 Your current ballance is 10$
// VM131:31 Your current ballance is 22$
// VM131:42 Please choose what Burger you want
// VM131:46 Choice 1: Cheeseburger for 3$
// VM131:46 Choice 2: Hamburger for 2.5$
// VM131:46 Choice 3: Chickenburger for 3.5$
// VM131:48 Your current ballance is 22$
// VM131:61 Thank you for buying a Chickenburger
// VM131:63 Your new ballance is 18.5$
