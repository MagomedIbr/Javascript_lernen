//Übung um einen Satz zu erstellen mit eingaben.
//Muss in Google Chrome Console reinkopiert werden

console.log("Hello welcome to the shop");

function Coffee() {
var q1 = prompt("Would you like a coffee or a tea");

if(q1=="coffee") {

var q2 = prompt("Would you like cookies with your coffee?");
if(q2=="yes"){
console.log("You have ordered Coffee and cokies");
} else if (q2 != "yes"){
console.log("You have only ordered coffee");
}
}else if(q1 =="tea") {
var q3 = prompt("Would you like cookies with your tea");

if(q3=="yes"){
console.log("You have ordered tea and cokies");
} else if (q3 != "yes"){
console.log("You have only ordered tea");
}
}else{
  console.log("this food does not exist please try again");
  Coffee();

}
}

Coffee();

/*
Console:
Hello welcome to the shop
VM116:26 this food does not exist please try again
VM116:26 this food does not exist please try again
VM116:26 this food does not exist please try again
VM116:15 You have only ordered coffee
*/
