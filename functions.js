function food(food){


console.log("I want to eat " + food);

}

//food("pizza")
//food(true)
//food(7)



function order(food_,quant, price){

total = quant*price;
food(food_);
console.log("You ordered " + quant +" slices of Pizza for " + price +"$ each" );
console.log ("Your total is " + total + "$");

}

order("Spaghetti",3,3.99);
