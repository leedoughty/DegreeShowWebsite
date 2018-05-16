var oosize;
var oooptions;
var imageTotal;
var imageIndex = 0;

function init() {
  oosize = document.getElementById("oosize");
  oooptions = document.getElementsByClassName("oooption");
  imageTotal = oooptions.length;

  var animate = function() {
    oosize.classList.add("hidden");
    for (var i = 0; i < imageTotal; i++) {
      oooptions[i].classList.add("hidden");
    }

    imageIndex++;
    if (imageIndex > imageTotal) {
      imageIndex = 0;
    }
    if (imageIndex === 0) {
      oosize.classList.toggle("hidden");
    } else {
      // frame 1 - 4 is the images, -1 to start the array at zero
      oooptions[imageIndex - 1].classList.toggle("hidden");
    }
  };

  animate();

  setInterval(animate, 2000);
}

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
//
//
// brand = document.getElementsByClassName("brand");
// txt = document.createTextNode("IN CAHAATS");
// brand.appendChild(txt);
// console.log("yooo");
