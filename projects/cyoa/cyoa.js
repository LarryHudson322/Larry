var name = prompt('What is your name?');



alert('Hello ' + name);
var response = prompt("You walk into techtown class and one guy tells the other guy he looks like his father. Type 'yes' if they need a DNA test, type 'no' if the DNA will not help");

if(response === "yes"){
    response = prompt("You may be a dead beat dad!!!! You are Dante");
} else if (response === "no") {
    response = prompt("You just look like someone else");
} else {
    alert("Enjoy your meal");
}
