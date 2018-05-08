$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});









$(".Sign").on("click", function(event){
    $("#signUp").slideToggle();
    event.preventDefault();
});