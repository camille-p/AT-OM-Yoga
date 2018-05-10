$("#stuckanchor li a").hover(function() {
  // $('li').toggle('active');
  clearTimeout(menuTimeout);
  $(this).closest('li').addClass('active');
});

var pWidth = $(window).innerWidth(); //use .outerWidth() if you want borders
var pOffset = $(window).offset();
var menu = $('#anchormenu');
var menuTimeout = null;

menu.find( "li a" ).click(function(event){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  event.preventDefault();
});

$( window ).scroll(function() {
  showMenu()
  clearTimeout( $.data( this, "scrollCheck" ) );
  $.data( this, "scrollCheck", setTimeout(function() {
    hideMenu()
  }, 2000) );
  console.log('scolling');
});

////////

$(window).on('mousemove', mouseMoveHandler);

function showMenu() {
  menu.removeClass('hide');
}

function hideMenu() {
  menu.addClass('hide');
}


function mouseMoveHandler(e) {  
  wwidth = $(window).width();
  woffset = wwidth - 100;
  console.log(wwidth + '/' + woffset);
  
  if (menu.is(':hover')) {
    // Show the menu if mouse is within 20 pixels 
    // from the left or we are hovering over it.
    clearTimeout(menuTimeout);
    menuTimeout = null;
    showMenu();
  } else if (e.pageX > woffset) {
    clearTimeout(menuTimeout);
    menuTimeout = null;
    showMenu();
    menuTimeout = setTimeout(hideMenu, 2000);
  } else if (menuTimeout === null) {
    // Hide the menu if the mouse is further than 20 pixels 
    // from the left and it is not hovering over the menu
    // and we aren't already scheduled to hide it.
    menuTimeout = setTimeout(hideMenu, 2000);
  }
};
    









$(".Sign").on("click", function(event){
    $("#signUp").slideToggle();
    event.preventDefault();
});




//select all the a tag with name equal to modal
$('a[name=modal]').on("click", function(event){

    //Cancel the link behavior
    e.preventDefault();
    //Get the A tag
    var id = $(this).attr('href');

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    //Set the popup window to center
    id.css('top', winH/2-id.height()/2);
    id.css('left', winW/2-id.width()/2);

    //transition effect
    id.fadeIn(500);

});

//if close button is clicked
$('.modalwindow .close').click(function (e) {

    //Cancel the link behavior
    e.preventDefault();

    $('.modalwindow').fadeOut(500);
});
    