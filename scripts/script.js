// fading the scroll div away

$(document).ready(function () {
  $(window).scroll(function () {
    $("#scrollDown").css(
      "opacity",
      0.6 - $(window).scrollTop() / $(window).height()
    );
  });
});
