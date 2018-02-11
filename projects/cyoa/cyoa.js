var name = prompt('What is your name?');



alert('Hello ' + name);
var response = prompt("You walk into your home and a light was on and window was open. Type 'go' if you want to go in, type 'no' if you call for help");

if(response === "go"){
    response = prompt("You walk in to find that there is someone waiting on you");
} else if (response === "no") {
    response = prompt("You call the for someone to come and walk in with you");

} else {
    alert("You find Dante HACKING into your computer!!!");
}
