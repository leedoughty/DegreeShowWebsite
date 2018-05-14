// (function() {
//   var parallax = document.querySelectorAll("screenprint2"),
//     speed = 0.5;
//
//   window.onscroll = function() {
//     [].slice.call(parallax).forEach(function(el, i) {
//       var windowYOffset = window.pageYOffset,
//         elBackgrounPos = "50% " + windowYOffset * speed + "px";
//
//       el.style.backgroundPosition = elBackgrounPos;
//     });
//   };
// })();

var ootext;
var oochange;

function init() {
  ootext = document.getElementsByClassName("brand");
  oochange = document.getElementsByClassName("ootext");
  imageTotal = oochange.length;

  setInterval(function() {
    ootext.classList.add("hidden");
    for (var i = 0; i < imageTotal; i++) {
      oochange[i].classList.add("hidden");
    }

    imageIndex++;
    if (imageIndex > imageTotal) {
      imageIndex = 0;
    }
    if (imageIndex === 0) {
      ootext.classList.toggle("hidden");
    } else {
      // frame 1 - 4 is the images, -1 to start the array at zero
      ooimages[imageIndex - 1].classList.toggle("hidden");
    }
  }, 1000);
}
