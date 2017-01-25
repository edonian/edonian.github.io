/* Sticky Menu (By Mark Senff) - http://codepen.io/senff/pen/ayGvD */

// Create a clone of the menu, right next to original.
$('nav').addClass('original').clone().insertAfter('nav').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',39).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

  /* Navigation changes colour upon scroll */ 
var a = $("nav").offset().top-$("p.title").outerHeight();

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.primary').css({"background":"#558097"});
    } else {
       $('.primary').css({"background":"#000000"});
    }
});



/* SLIDESHOW */

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 8000);




// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});




/* Tabs code for Portfolio */
$(document).ready(function(){
		$(".tabContents").hide(); // Hide all tab content divs by default
		$(".tabContents:first").show(); // Show the first div of tab content by default
		$("ul.tcontainer li a").click(function(){ //Fire the click event
			var activeTab = $(this).attr("href"); // Catch the click link
			$(".tabContainer ul.tcontainer li a").removeClass("active"); // Remove pre-highlighted link
			$(this).addClass("active"); // set clicked link to highlight state
			$(".tabContents").hide(); // hide currently visible tab content div
			$(activeTab).fadeIn(); // show the target tab content div by matching clicked link.
			
			return false; //prevent page scrolling on tab click
		});
	});


/*Smooth scrolling*/

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
