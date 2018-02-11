var response = prompt("You walk into Techtown and Chris is telling people to sign up for a new coding class. Type'y' if you want to sign up , Type 'n' if you dont wont to.");

if(response === "y"){
    response = prompt("You know how to code with out any help. Type 'y' if you are confident Type 'n' if are not ready.");
} else if (response === "n") {
    response = prompt("You are about to pull your hair out of your head. Type 'y' happy with your webpage, Type 'n' if your not.");

} else {
    alert();
}
//var response = prompt("Chris tells John to give extra help to you if needed. Type 'y' if John has been a big help to you, Type 'n' if John has not");

if(response === "y"){
    alert("You really got it and I'm happy for you!!!");
} else if (response === "n") {
     alert("You missed the short bus!!!");
} //else
{
    alert("Thanks for your survey.");
}
