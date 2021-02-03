var hour,minutes,seconds;


function setup() {
  createCanvas(800,400);
  hour = hour();
  minutes = minute();
  seconds = second()

  angleMode(DEGREES)
    createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  secondsAngle = map(seconds,0,60,0,360) 
  minutesAngle = map(minutes,0,60,0,360) 
  hourAngle = map(hour,0,24,0,360);
  drawSprites();
}

function secondsline(){
   push();
 rotate(secondsAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}

function minutesline(){
  push();
rotate(minutesAngle)
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,200,0);
 pop();
}

function hourline(){
  push();
rotate(hourAngle)
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,300,0);
 pop();
}

function arc(){
arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

}
