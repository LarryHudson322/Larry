$(document).ready(function() {
    $('#sumbit').click(function() {
        $('#contactform').attr('action',
                       'mailto:Lhudson322@gmail.com?subject=LarryHudson Chambliss Digital Portfolio' +
                       $('#name').val() + '&body=' + $('#email').val() + '&body=' + $('#comments').val() + '&body=');
        $('#contactform').submit();
    });
});
//
//
//
// // <h1>Choose Your Own Adventure</h1>
//
//
// <script type="text/javascript">
//  var name = prompt('What is your name?');
//
//  var checkName = function(){
//    if(name === "") {
//      name = prompt('What is your name, for real this time?');
//
//      checkName(); // repeats until a name exists
//    }
//  }
//
//  checkName(); // kicks off the name-checking the first time
//
//  alert('Hello ' + name);
// </script>
//
//
//
// // rock, paper or scissors
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);
//
// var compare = function(choice1, choice2){
//     if (choice1 === choice2){
//         alert("The result is a tie!");
//     }
//     else if(choice1 === 'rock'){
//         if(choice2 === 'scissors'){
//             alert("rock wins");
//         }
//         else{
//             alert("paper wins");
//         }
//     }
//     else if(choice1 === "scissors"){
//         if(choice2 === 'paper'){
//             alert('scissors wins');
//         }
//         else{
//             alert('rock wins');
//         }
//     }
//     else if(choice1 === 'paper'){
//         if(choice2 === 'rock'){
//             alert('paper wins');
//         }
//         else{
//             alert('scissors wins');
//         }
//     }
// }
//
// compare(userChoice, computerChoice);
//
//
// // <h1>Choose Your Own Adventure</h1>
//
//
// <script type="text/javascript">
//  var name = prompt('What is your name?');
//
//  var checkName = function(){
//    if(name === "") {
//      name = prompt('What is your name, for real this time?');
//
//      checkName(); // repeats until a name exists
//    }
//  }
//
//  checkName(); // kicks off the name-checking the first time
//
//  alert('Hello ' + name);
// </script>
//
//
// // Cyoa
//
// var response = prompt("You walk into Techtown and Chris is telling people to sign up for a new coding class. Type'y' if you want to sign up , Type 'n' if you dont wont to.");
//
// if(response === "y"){
//     response = prompt("You know how to code with out any help. Type 'y' if you are confident Type 'n' if are not ready.");
// } else if (response === "n") {
//     response = prompt("You are about to pull your hair out of your head. Type 'y' happy with your webpage, Type 'n' if your not.");
//
// } else {
//     alert();
// }
// //var response = prompt("Chris tells John to give extra help to you if needed. Type 'y' if John has been a big help to you, Type 'n' if John has not");
//
// if(response === "y"){
//     alert("You really got it and I'm happy for you!!!");
// } else if (response === "n") {
//      alert("You missed the short bus!!!");
// } //else
// {
//     alert("Thanks for your survey.");
// }
//
// // <script>
// //
// // window.onscroll = function() {scrollFunction()};
// //
// // function scrollFunction() {
// //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// //         document.getElementById("topBtn").style.display = "block";
// //     } else {
// //         document.getElementById("topBtn").style.display = "none";
// //     }
// // }
// //
// //
// // function topFunction() {
// //     document.body.scrollTop = 0;
// //     document.documentElement.scrollTop = 0;
// // }
// // </script>
//
//
// $(document).ready(function() {
//
//   $(window).scroll(function() {
//
//     var mq = window.matchMedia('all and (min-width: 600px)');
//
//     if (($(this).scrollup() > 100) && (mq.matches)) {
//       $('.scrollup').fadeIn();
//     } else {
//       $('.scrollup').fadeOut();
//     }
//   });
//
//   $('.scrollup').click(function() {
//     $("html, body").animate({
//       scrollup: 0
//     }, 800);
//     return false;
//   });
//
// });
