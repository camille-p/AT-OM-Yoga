//Hamburger menu

$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});


//To Sign Up for Classes

$(".Sign").on("click", function(){
  $("#signUp, .modal-box").addClass("active");
});

$(".close").on("click", function(){
  $("#signUp, .modal-box").removeClass("active");
});



//To Sign Up for the Newsletter

$(".Newsletter").on("click", function(){
  $("#signNewsletter, .sign-newsletter").addClass("active");
});

$(".close").on("click", function(){
 $("#signNewsletter, .sign-newsletter").removeClass("active");
});

$("form#signNewsletter").on("submit", function() {
   var first_name = $("input#firstName").val();
    $("div#playback").text("Thank You " + first_name + " ");
    event.preventDefault();
});

//When asking a question

$("form.contact-form").on("submit", function() {
   var first_name = $("input.firstName").val();
    $("div#thanks").text("Thank You " + first_name + " ");
    event.preventDefault();
});