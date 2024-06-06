function setup() {
    createCanvas(600,600);
    background("rgb(0,0,0)")
  }
  
  function draw() {
   
    stroke("blue")
    fill("red")
   
   
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,20)
    }
  }