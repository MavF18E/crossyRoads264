const canvas1 = document.getElementById("layer1");
const ctx1 = canvas1.getContext("2d");
const image = document.getElementById("scream");

// Initial drawing of the image onto the canvas is removed since you want to move the HTML image and not a canvas image.
// image.addEventListener("load", (e) => {
//   ctx1.drawImage(image, 10, 10);
// });

const canvas = document.getElementById("streets");
const ctx = canvas.getContext("2d");
let x = [10, 15, 30];
let y = [0, 100, 0];
const width = 10;
const height = 50;
const speed = [1,1,1];
function slide (time) {
  for (let i = 0; i < 3; i++) {
    ctx.clearRect(x[i]-speed[i]-1, y[i], width+2, height+2);
    ctx.fillRect(x[i], y[i], width, height);
    x[i] += speed[i];
    if (x[i] > canvas.width) x[i] = 0;
  }
  window.requestAnimationFrame(slide);
};
window.requestAnimationFrame(slide);

const canvas2 = document.getElementById("water");
const ctx2 = canvas2.getContext("2d");
let x2 = [10, 30, 60, 100];
let y2 = [0, 60, 0, 120];
const width2 = 25;
const height2 = 30;
const speed2 = [1, 1, 1, 1];
function slide2 (time) {
  for (let i = 0; i < 4; i++) {
    ctx2.clearRect(x2[i]-speed2[i]-1, y2[i], width2+2, height2+2);
    ctx2.fillRect(x2[i], y2[i], width2, height2);
    x2[i] += speed2[i];
    if (x2[i] > canvas2.width) x2[i] = 0;
  }
  window.requestAnimationFrame(slide2);
};
window.requestAnimationFrame(slide2);

// Moving Object on the Canvas
let movingObjectX = canvas1.width / 2;
let movingObjectY = canvas1.height-30;
const movingObjectWidth = 20;
const movingObjectHeight = 20;

// function drawMovingObject() {
//   ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
//   ctx1.fillStyle = "transparent";
//   ctx1.fillRect(movingObjectX, movingObjectY, movingObjectWidth, movingObjectHeight);
// }

// Updated Keyboard Control for Moving both the Canvas Rect and HTML Image
// const image = document.getElementById("scream");

// Set initial position for the image if not already set in CSS
image.style.position = 'absolute';  // Make sure the image can be positioned
image.style.left = '680px';  // Initial horizontal position
image.style.top = "600px";   // Initial vertical position

document.addEventListener("keydown", function(event) {
  let left = parseInt(image.style.left, 10);
  let top = parseInt(image.style.top, 10);

  switch(event.key) {
    case "ArrowUp":
      image.style.top = `${top - 10}px`;
      break;
    case "ArrowDown":
      image.style.top = `${top + 10}px`;
      break;
    case "ArrowLeft":
      image.style.left = `${left - 10}px`;
      break;
    case "ArrowRight":
      image.style.left = `${left + 10}px`;
      break;
  }
});


// drawMovingObject(); // Initial draw of the moving object
