// var ootext;
// var ooimage;
//
// function init() {
//   ootext = document.getElementById("ootext");
//   ooimage = document.getElementById("ooimage");
//   setInterval(function() {
//     ootext.classList.toggle("hidden");
//     ooimage.classList.toggle("hidden");
//   }, 2000);
// }

var ootext;
var ooimages;
var imageTotal;
var imageIndex = 0;

function init() {
  ootext = document.getElementById("ootext");
  ooimages = document.getElementsByClassName("ooimage");
  imageTotal = ooimages.length;

  setInterval(function() {
    ootext.classList.add("hidden");
    for(var i = 0; i < imageTotal; i++) {
      ooimages[i].classList.add("hidden");
    }

    imageIndex++;
    if(imageIndex > imageTotal) {
      imageIndex = 0;
    }
    if(imageIndex === 0) {
      ootext.classList.toggle("hidden");
    } else {
      // frame 1 - 4 is the images, -1 to start the array at zero
      ooimages[imageIndex - 1].classList.toggle("hidden");
    }

  }, 1000);
}
