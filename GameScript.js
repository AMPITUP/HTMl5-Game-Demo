//Game Script//


// Constants
var FPS = 30;

// Variables
var RArrow = 39;
var LArrow = 37;

// canvas + context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
canvas.background = "green";


// Array of key flags
var KeyDownA = [];
onkeydown = function(e) {
  e = e || event;
  KeyDownA [e.keyCode] = true;
};
onkeyup = function(e) {
  e = e || event;
  KeyDownA [e.keyCode] = undefined;
};   
//shooting key flags
var KeyDownX = [];
onkeydown2 = function(e) {
  e = e || event;
  KeyDownX [e.keyCode] = true;
};
onkeyup2 = function(e) {
  e = e || event;
  KeyDownX [e.keyCode] = undefined;
};


// greenSquare
var greenSquare = {
  color: "red",
  x: canvas.width / 2,
  y: canvas.height / 2,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  radius: 5,
  width: 10,
  // draw function
  draw: function() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
  },
  // update function
  update: function() {
    this.vx += this.ax / FPS;
    this.vy += this.ay / FPS;
    this.x += this.vx / FPS;
    this.y += this.vy / FPS;
  },
  // keymove function
  keymove: function() {
    if (KeyDownA[RArrow] &&
        this.x + this.width < canvas.width)
      this.x += 10;
    if (KeyDownA[LArrow] &&
        this.x - this.width > 0)
      this.x -= 10;
  }
};
