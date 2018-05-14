$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});


$(".Sign").on("click", function(){
$("#signUp, .modal-box").addClass("active");
});

$(".close").on("click", function(){
$("#signUp, .modal-box").removeClass("active");
});


    