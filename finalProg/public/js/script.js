const canvas1 = document.getElementById("layer1");
const ctx1 = canvas1.getContext("2d");
const image = document.getElementById("scream");

// Initial drawing of the image onto the canvas is removed since you want to move the HTML image and not a canvas image.
// image.addEventListener("load", (e) => {
//   ctx1.drawImage(image, 10, 10);
// });

const canvas = document.getElementById("streets");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.moveTo(0,70);
ctx.lineTo(1380,70);
ctx.stroke();
ctx.moveTo(0,80);
ctx.lineTo(1380,80);
ctx.stroke();
ctx.moveTo(0,80);
ctx.lineTo(1380,80);
ctx.stroke();
let x = [10, 70, 130, 190, 250];
let xback = [15, 75,135,195,255]
let xpx = [545,605, 665, 725, 785];
let xpxback = [550, 555, , 1190,1125]
let y = [0, 0 , 0, 0, 0];
let yback = [100,100,100,100,100]
let ypx = [345, 345, 345, 345, 345]
let ybackpx = [435,435,435,435,435]
const width = 10;
const height = 50;
const speed = [1,1,1,1,1,1];
function slide (time) {
  for (let i = 0; i < 5; i++) {
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
function slidebackwards (time) {
  for (let i = 0; i < 5; i++) {
    ctx.clearRect(xback[i]+speed[i]-1, yback[i], width+2, height+2);
    ctx.fillRect(xback[i], yback[i], width, height);
    xback[i] -= speed[i]; // Decrement the x position
    xpxback[i] -= speed[i]; // Update additional x position if needed
    if (xback[i] < -10) {
      xback[i] = canvas.width;
      xpxback[i] = 1380;
    }
  }
  window.requestAnimationFrame(slidebackwards);
};
window.requestAnimationFrame(slidebackwards);

const canvas2 = document.getElementById("street2");
const ctx2 = canvas2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "yellow";
ctx2.lineWidth = 2;
ctx2.moveTo(0,40);
ctx2.lineTo(1380,40);
ctx2.stroke();
ctx2.moveTo(0,45);
ctx2.lineTo(1380,45);
ctx2.stroke();
ctx2.moveTo(0,100);
ctx2.lineTo(1380,100);
ctx2.stroke();
ctx2.moveTo(0,105);
ctx2.lineTo(1380,105);
ctx2.stroke();
let x2 = [10, 30, 60, 50];
let xpx2 = [545,565,595,585]
let y2 = [0, 60, 0, 120];
let ypx2 = [75, 165, 75, 255]
const width2 = 25;
const height2 = 30;
const speed2 = [1, 1, 1, 1];
function slide2 (time) {
  for (let i = 0; i < 4; i++) {
    ctx2.clearRect(x2[i]-speed2[i]-1, y2[i], width2+2, height2+2);
    ctx2.fillRect(x2[i], y2[i], width2, height2);
    x2[i] += speed2[i];
    xpx2[i] += speed2[i];
    if (x2[i] > canvas2.width){
      x2[i] = 0;
      xpx2[i] = 535;
    }
  }
  window.requestAnimationFrame(slide2);
};
window.requestAnimationFrame(slide2);

const canvas3 = document.getElementById("street3");
const ctx3 = canvas3.getContext("2d");
ctx3.beginPath();
ctx3.strokeStyle = "yellow";
ctx3.lineWidth = 3;
ctx3.moveTo(0,70);
ctx3.lineTo(1380,70);
ctx3.stroke();
ctx3.moveTo(0,80);
ctx3.lineTo(1380,80);
ctx3.stroke();
ctx3.moveTo(0,80);
ctx3.lineTo(1380,80);
ctx3.stroke();
let x3 = [10, 15, 30];
let xpx3 = [545,550,565];
let y3 = [0, 100, 0];
let ypx3 = [-60,-15,-60]
const width3 = 10;
const height3 = 50;
const speed3 = [1,1,1];
function slide3 (time) {
  for (let i = 0; i < 3; i++) {
    ctx3.clearRect(x3[i]-speed3[i]-1, y3[i], width3+2, height3+2);
    ctx3.fillRect(x3[i], y3[i], width3, height3);
    x3[i] += speed3[i];
    xpx3[i] += speed3[i];
    if (x3[i] > canvas3.width) {
      x3[i] = 0;
      xpx3[i] = 535;
    }
  }
  window.requestAnimationFrame(slide3);
};
window.requestAnimationFrame(slide3);


// Set initial position for the image if not already set in CSS
image.style.position = 'absolute';  // Make sure the image can be positioned
image.style.left = '680px';  // Initial horizontal position
image.style.top = "480px";   // Initial vertical position

document.addEventListener("keydown", function(event) {
  let left = parseInt(image.style.left, 10);
  let top = parseInt(image.style.top, 10);

  switch(event.key) {
    case "ArrowUp":
      if (top - 45 >= -120){
        image.style.top = `${top - 45}px`;
        console.log(`Image position: (${left}px, ${top - 45}px`); // Print position
        for(let i = 0; i < x.length; i++){
          console.log(xpx[i]);
          console.log(ypx[i]);
          if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpxback[i]+10 <= left && left <= xpxback[i] -10 && ybackpx[i] == top)||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
        break;
      }
    case "ArrowDown":
      if (top + 45 <= 480){
        image.style.top = `${top + 45}px`;
        for(let i = 0; i < x.length; i++){
          console.log(xpx[i]);
          console.log(ypx[i]);
          if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
      }
      break;
    case "ArrowLeft":
      if(left - 45 >= 0){
      image.style.left = `${left - 45}px`;
      for(let i = 0; i < x.length; i++){
        console.log(xpx[i]);
        console.log(ypx[i]);
        if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
          image.style.left = '680px';
          image.style.top = '480px';
        }
      }
      }
      break;
    case "ArrowRight":
      if(left + 45 <= 1380){
        image.style.left = `${left + 45}px`;
        for(let i = 0; i < x.length; i++){
          console.log(xpx[i]);
          console.log(ypx[i]);
          if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
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
      if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
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
