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
