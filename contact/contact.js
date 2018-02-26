// //ganerate html content fromm an array using forEach

// let contactArray = ["Larry", "423-308-7730", "Lhudson322@gmail.com",]
// contactArray[3] = "A new Item"
// contactArray[4] = "LarryHudson"
//
// function addContent(array){
// console.log(array)
// $("#contact-array").append("<li>" + array + "</li>");
// }
//
// contactArray.forEach(addContent)
// //refactor to Object and for loop
//
// var contactObject = {
//     "name": "Professor Chaos",
//     "email": "professor@professorchaos.com"
// }

// //Try to get an email sent
// $('#contact-form').submit(function(e){
//  var name = document.getElementById('inputName'),
//     email =document.getElementById('inputEmail'),
//   message =document.getElementById('inputMessage');
//
// if (!name.value || !email.value || !message.value){
//    alertify.error('Please check your entries')
// }else{
//  $.ajax({
//     url:"https://formspree.io/lhudson322@gmail.com",
//     method: "POST",
//     data: $(this).serialize(),
//     dataType: "json"
//
//
//   e.preventDefault()
//   $(this).get(0).reset()
//   alertify.success('Message sent')
// }
// })

$(document).ready(function() {
    $('#sumbit').click(function() {
        $('#contactform').attr('action',
                       'mailto:Lhudson322@gmail.com?subject=LarryHudson Chambliss Digital Portfolio' +
                       $('#name').val() + '&body=' + $('#email').val() + '&body=' + $('#comments').val() + '&body=');
        $('#contactform').submit();
    });
});
