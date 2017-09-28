$(document).ready(function(){
    $(".submit").click(function(){
        emailjs.send("gmail","contact_form",{name: "Sara", notes: "Check this out!"});
    });
});

