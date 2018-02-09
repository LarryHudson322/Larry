var response = prompt("You walk into the house and your wife didn't cook. Type 'BK' to go to Burger King , type 'SS' to go to Stake a Shake");

if(response === "BK"){
    response = prompt("You go the Burger king with out her");
} else if (response === "SS") {
    response = prompt("You go to Stake a Shake");
} else {
    alert("Enjoy your meal by yourself!");
}
