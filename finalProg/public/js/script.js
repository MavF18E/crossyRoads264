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
let xpx = [545,550,565];
let y = [0, 100, 0];
let ypx = [280,330,280]
const width = 10;
const height = 50;
const speed = [0,1,1];
function slide (time) {
  for (let i = 0; i < 3; i++) {
    ctx.clearRect(x[i]-speed[i]-1, y[i], width+2, height+2);
    ctx.fillRect(x[i], y[i], width, height);
    x[i] += speed[i];
    xpx[i] += speed[i];
    if (x[i] > canvas.width) {
      x[i] = 0;
      xpx[i] = 535;
    }
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


// Set initial position for the image if not already set in CSS
image.style.position = 'absolute';  // Make sure the image can be positioned
image.style.left = '680px';  // Initial horizontal position
image.style.top = "480px";   // Initial vertical position

document.addEventListener("keydown", function(event) {
  let left = parseInt(image.style.left, 10);
  let top = parseInt(image.style.top, 10);

  switch(event.key) {
    case "ArrowUp":
      if (top - 50 >= -120){
        image.style.top = `${top - 50}px`;
        console.log(`Image position: (${left}px, ${top - 50}px`); // Print position
        for(let i = 0; i < x.length; i++){
          console.log(xpx[i]);
          console.log(ypx[i]);
          if(xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
        break;
      }
    case "ArrowDown":
      if (top + 50 <= 480){
        image.style.top = `${top + 50}px`;
        for(let i = 0; i < x.length; i++){
          console.log(xpx[i]);
          console.log(ypx[i]);
          if(xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
      }
      break;
    case "ArrowLeft":
      if(left - 50 >= 0){
      image.style.left = `${left - 50}px`;
      for(let i = 0; i < x.length; i++){
        console.log(xpx[i]);
        console.log(ypx[i]);
        if(xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top){
          image.style.left = '680px';
          image.style.top = '480px';
        }
      }
      }
      break;
    case "ArrowRight":
      if(left + 50 <= 1350){
        image.style.left = `${left + 50}px`;
        for(let i = 0; i < x.length; i++){
          console.log(xpx[i]);
          console.log(ypx[i]);
          if(xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
      }
      break;
  }
});
function continuouslyRunningFunction() {
    let left = parseInt(image.style.left, 10);
    let top = parseInt(image.style.top, 10);
    for(let i = 0; i < x.length; i++){
      console.log(xpx[i]);
      console.log(ypx[i]);
      if(xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top){
        image.style.left = '680px';
        image.style.top = '480px';
      }
    }
    // Your code here
    console.log("This function runs continuously");
}

// Call continuouslyRunningFunction() every 1000 milliseconds (1 second)
setInterval(continuouslyRunningFunction, 300);


// drawMovingObject(); // Initial draw of the moving object
