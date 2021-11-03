/**
 * READ Me
 * Add a section in the HTML folder containing the id="particleMov" to activate this effect
 * This effect will generate sparkles behind the mouse
 */

// Add this style in the css to activate this

// /* Particle Movement Canvas */

// #particleMov {
//   position: absolute;
//   overflow: hidden;
//   width: 50%;
//   right: 0;
//   height: 600px;
//   z-index: -10;
// }

// .ball {
//   pointer-events: none;
//   position: absolute;
//   width: 2px;
//   height: 2px;
//   border-radius: 50%;
//   background: #ff9601;
//   animation: implode 0.8s ease-in-out;
//   animation-fill-mode: both;
//   opacity: 0.7;
// }

// @keyframes implode {
//   100% {
//     transform: scale(1);
//   }
// }



$(document).ready(function () {
    var mousePos = {};
  
    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min + 1)) + min;
    }
  
    $(document).mousemove(function (e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
  
    $(document).mouseleave(function (e) {
      mousePos.x = -1;
      mousePos.y = -1;
    });
  
    var draw = setInterval(function () {
      if (mousePos.x > 0 && mousePos.y > 0) {
        var range = 5;
  
        var color = "background: rgb(100,59,0)";
  
        var sizeInt = getRandomInt(0, 1);
        size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
  
        var left =
          "left: " +
          getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) +
          "px;";
  
        var top =
          "top: " +
          getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) +
          "px;";
  
        var style = left + top + color + size;
        $("<div class='ball' style='" + style + "'></div>")
          .appendTo("#particleMov")
          .one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function () {
              $(this).remove();
            }
          );
      }
    }, 0.001);
  });