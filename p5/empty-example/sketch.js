// animated texturised interactive brush that the user can draw with on the home page

// creating a brush from animated mark-making gif
var brush;
// links to container in html
var htmlCanvas;
// find the mouse coordinates
var find;
// create the framerate to create a smooth moving brush
var fr = 30;

function setup() {
	// apply variable to canvas in p5
	htmlCanvas = createCanvas(windowWidth, windowHeight);
	//load brush gif using p5.gif.js library
	brush = loadGif('../../materials/brush.gif');
	console.log(brush);
	// find location
	find = 1;
	// make canvas' parent link to container in the html
	htmlCanvas.parent('htmlContainer');
	// position canvas at 0,0 coordinates
	htmlCanvas.position(0, 0);
}

function draw() {
	// show no cursor when the brush is being used
  noCursor();
	// smooth out brush movement
	frameCount(1);
	frameRate(fr);
}

// when the mouse is moved, the brush draws
function mouseMoved() {
	if (mouseX > 1 && mouseY > 1) {
		// if find divided by 2 is equal to 1 display the image this way
		if (find / 2 === 1) {
			// scale brush to half the size
			scale(0.5);
			// BURN blendmode applies the darker areas of the gif and ignores the lighter areas
			blendMode(BURN);
			// display brush as mouseX and mouseY coordinates, map this to mouseX and mouseY
			image(brush, mouseX, mouseY, map(mouseX, mouseY, width, 0, 0));
	} else if (find % 2 == 1) {
			blendMode(BURN);
			image(brush, mouseX, mouseY, map(mouseX, mouseY, width, 50, 50), map(mouseX, mouseY, width, 50, 50));
			image(brush, mouseX, mouseY, map(mouseX, mouseY, width, 50, 50), map(mouseX, mouseY, width, 50, 50));
		}
	}
}
