//ganerate html content fromm an array using forEach

let contactArray = ["Larry", "423-308-7730", "Lhudson322@gmail.com",]
contactArray[3] = "A new Item"
contactArray[4] = "LarryHudson"

function addContent(array){
console.log(array)
$("#contact-array").append("<li>" + array + "</li>");
}

contactArray.forEach(addContent)
//refactor to Object and for loop

var contactObject = {
    "name": "Professor Chaos",
    "email": "professor@professorchaos.com"
}
