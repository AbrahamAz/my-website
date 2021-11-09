// fading the scroll div away

$(document).ready(function () {
  $(window).scroll(function () {
    $("#scrollDown").css(
      "opacity",
      0.6 - $(window).scrollTop() / $(window).height()
    );
  });
});

/**
 * Idea for including a game in the html that move a ball
 * Down blocks, and every here and there it reachs a step were
 * it tell a section of my website
 */


// moving the scrolling button of the mouse

$(document).ready(function(){
  animateDiv('.mouseScroll');
});

function makeNewPosition(){
  var h = $(window).height() - 100;
  var nh = Math.floor(h/30);
  return [nh];
};

function animateDiv(myClass) {
  var newq = makeNewPosition();
  $(myClass).animate({top: newq[0]}, 1500, 'linear', function(){
    $(myClass).css('top', '10px');
    animateDiv(myClass);
  });
};