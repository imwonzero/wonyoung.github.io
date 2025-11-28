function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#dbebfa');
  
  noStroke();
  
  // body
  fill('#ff9933')
  quad(280, 150, 320, 150, 340, 260, 260, 260);
  quad(280, 160, 300, 170, 240, 240, 220, 225);
  quad(300, 170, 320, 160, 380, 225, 360, 240);
  
  // back hair
  fill('#543729');
  triangle(255, 105, 270, 130, 230, 150);
  triangle(265, 125, 280, 150, 240, 170);
  triangle(345, 105, 330, 130, 370, 150);
  triangle(335, 125, 320, 150, 360, 170);
  
  // head
  fill('#ffddc2');
  ellipse(300, 100, 90);
  arc(300, 100, 90, 150, 0, PI);
  
  // hand
  ellipse(230, 232, 30);
  ellipse(370, 232, 30);
  
  fill('#FAECC5');
  ellipse(235, 230, 10);
  ellipse(375, 230, 10);
  
  //hair
  fill('#543729');
  arc(300, 105, 90, 110, PI, TWO_PI);
  
  fill('#ffddc2');
  triangle(300, 65, 340, 105, 260, 105);
  
  //face
  fill('#543729');
  quad(270, 100, 290, 105, 290, 110, 270, 105);
  quad(310, 105, 330, 100, 330, 105, 310, 110);
  
  stroke('#543729');
  strokeWeight(2);
  line(298, 120, 298, 135);
  line(290, 158, 310, 158);
  
  fill('#ffddc2');
  arc(280, 120, 20, 15, PI, TWO_PI, OPEN);
  arc(320, 120, 20, 15, PI, TWO_PI, OPEN);
  arc(298, 140, 10, 10, HALF_PI, 3*HALF_PI, OPEN)
  
  
  noStroke();
  fill('#543729');
  ellipse(280, 120, 12);
  ellipse(320, 120, 12);
  
  ellipse(315, 150, 2);
  ellipse(313, 165, 2)
  
  // leg
  fill('#4d4f53');
  arc(300, 260, 80, 70, 0, PI);
  quad(260, 260, 300, 260, 290, 370, 270, 370);
  quad(300, 260, 340, 260, 330, 370, 310, 370);
  ellipse(280, 370, 35, 25);
  ellipse(320, 370, 35, 25)
  
  // shadow
  fill('#666');
  ellipse(325, 315, 7, 80);
  ellipse(285, 315, 7, 80);
  
  fill('#ffb310');
  ellipse(320, 215, 7, 70)
}