
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create a new array of one element and assign it to "dot"

function setup() { //runs once
  createCanvas(500, 300); // creates p5 canvas
  dots[0] = new Dot(width/2, height/2); //initilize the first setting of the dot
} // end the setup function

function draw() { //sets up display function
  background(200); //background color
  
  for(let i = 0; i < dots.length; i++){ // allow dots to loop through the array
    dots[i].move(); //makes dots move
    dots[i].display(); //makes dots appear
  }
  textSize(24); //sets up text size 
  fill(100, 0, 200); //positions text on screen
  text("'dots' array length: " + dots.length, 100, 100); //insert whatever text you want here

} // end the draw function

function mousePressed(){ //different from "if mousePressed" bc mouse does not have to be held down
  let obj = new Dot(mouseX, mouseY); //dots will appear anywhere you click mouse
  dots.push(obj); // add to the Dots array
  console.log(dots.length); //print the size of the array in the console
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){ //constructor function
  
  this.x = X; // set the x property from the first arguement
  this.y = Y; //set the y property from the second arguement 
  this.w = random (20, 50); // random width
  this.sx = random(-5, 5); // x speed
  this.sy = random(-5, 5); // y speed
  this.r = random(0, 255); // set red level
  this.g = random(0, 255); // set green level
  this.b = random(0, 255); // set blue level
  
  this.display = function(){ // show the object
    fill(this.r, this.g, this.b); // set the color
    ellipse(this.x, this.y, this.w, this.w); // draw a circle
  } // end of display method
  
  this.move = function(){ // move the object
    this.x += this.sx; // update horizontal location
    this.y += this.sy; // update vertical location
    
    if (this.x < 0 || this.x > width){ // if off screen horizontally
        this.sx *= -1; // change direction
    } // end of if statement
    if (this.y < 0 || this.y > height){ // if off screen vertically
        this.sy *= -1; // change direction
    } // end of the if 
  } // end move method
    
} // end of Dot constructor 
