// //EXERCISE 1: Create a while loop that logs numbers 1 through 10 to the console
// a
 var n = 1;
 while (n <= 10) {
    console.log(n);
     n++;
 }
//
//
// //EXERCISE 2: Create a while loop that logs every even number from 2 through 20 to the console
var n = 2;

while (n <= 20) {
    console.log(n);
    n += 2;
}
//
// //EXERCISE 3: Create a while loop that console.logs a running total of the cumulative sum of numbers from 1 to n
// var n = 100;
// var i = 1;
// var sum = 0;
//
// while (i < n) {
//     sum += i;
//     console.log(sum);
//     i++;
// }//EXERCISE 4: In your HTML document, create a separate div for each exercise. Then, in addition to console.log-ing each iteration, append all of the results to their respective divs using an unordered list. HINT (for exercise 1... try the others on your own)
// var n = 1;
// var outputTarget = document.querySelector("#exercise-1");
// var outputHtml = "<ul>";
//
// while (n <= 10) {
//     console.log(n);
//     ouputHtml += "<li>" + n + "</li>";
//     n++;
// }
//
// outputHtml += "</ul>";
//
// outputTarget.innerHTML = outputHtml;
//
// //EXERCISE 5: We can also combine if and else statements in our loops to respond to different input states. For this exercise, count down from 15 by ones. For each number, log "even" or "odd" to the console and to a new div for Exercise 5
// var n = 15;
// var outputTarget = document.querySelector("#exercise-5");
// var outputHtml = "<ul>";
//
// while (n > 0) {
//     console.log(n);
//     if ( n % 2 === 0) {
//         outputHtml += "<li>even</li>";
//     } else {
//         outputHtml += "<li>odd</li>";
//     }
//     n--;
// }
//
// ouputHtml = "</ul>";
//
// outputTarget.innerHTML = outputHTML;
//
//
// //EXERCISE 6: Let's extend the idea of if and else in while loops with a pretty common exercise called FizzBuzz. For this exercise, log and output "Fizz" if a number is divisible by 3, "Buzz" if a number by 5, and "FizzBuzz" if a number is divisible by both 3 and 5. If a number is not divisible by 3 or 5, then just output the number. For this exercise, count up from 1 to 100
// while (n <= 100) {
//     if(n % 3 === 0 && n % 5 == 0){
//         console.log("FizzBuzz");
//         outputHtml += "<li>FizzBuzz</li>";
//     } else if (n % 3 === 0) {
//         console.log("Fizz");
//         outputHtml += "<li>Fizz</li>";
//     } else if (n % 5 === 0) {
//         console.log("Buzz");
//         outputHtml += "<li>Buzz</li>";
//     } else {
//         console.log(n);
//         ouputHtml += "<li>" + n + "</li>";
//     }
//
//     n++;
// }
//
// ouputHtml = "</ul>";
//
// outputTarget.innerHTML = outputHTML;
