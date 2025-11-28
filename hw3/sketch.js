let faceOn = false;
let bodyOn = false;
let weaponOn = false;

const baseSkin = '#ffddc2';
const altSkin  = '#000000';

const baseEye  = '#543729';
const altEye   = '#851394';

const baseBody = '#ff9933';
const altBody  = '#000000';

const legCol   = '#4d4f53';
const hairCol  = '#543729';
const altHair = '#b7b7b7';
const accent   = '#ffb310';

const FACE_X=300, FACE_Y=100, FACE_R=45;
const BODY_X1=260, BODY_Y1=150, BODY_X2=340, BODY_Y2=260;
const RH_X=370, RH_Y=232, RH_R=16;

// 이동
let moveX = 0;
let moveY = 0;
let step = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  if (keyIsDown(LEFT_ARROW))  moveX -= step;
  if (keyIsDown(RIGHT_ARROW)) moveX += step;
  if (keyIsDown(UP_ARROW))    moveY -= step;
  if (keyIsDown(DOWN_ARROW))  moveY += step;

  background('#dbebfa');
  noStroke();
  
  let SKIN = baseSkin;
  let HAIR = hairCol;
  if (faceOn) {
    SKIN = altSkin;
    HAIR = altHair;
  }
  let EYE = baseEye;
  if (faceOn) {
    EYE = altEye;
  }
  let BODYCOL = baseBody;
  if (bodyOn) {
    BODYCOL = altBody;
  }
  
  //상체
  fill(BODYCOL);
  quad(280+moveX,150+moveY, 320+moveX,150+moveY, 340+moveX,260+moveY, 260+moveX,260+moveY);
  quad(280+moveX,160+moveY, 300+moveX,170+moveY, 240+moveX,240+moveY, 220+moveX,225+moveY);
  quad(300+moveX,170+moveY, 320+moveX,160+moveY, 380+moveX,225+moveY, 360+moveX,240+moveY);

  //뒷머리
  fill(HAIR);
  triangle(255+moveX,105+moveY, 270+moveX,130+moveY, 230+moveX,150+moveY);
  triangle(265+moveX,125+moveY, 280+moveX,150+moveY, 240+moveX,170+moveY);
  triangle(345+moveX,105+moveY, 330+moveX,130+moveY, 370+moveX,150+moveY);
  triangle(335+moveX,125+moveY, 320+moveX,150+moveY, 360+moveX,170+moveY);

  //머리피부
  fill(SKIN);
  ellipse(FACE_X+moveX, FACE_Y+moveY, 90);
  arc(FACE_X+moveX, FACE_Y+moveY, 90, 150, 0, PI);

  //손
  fill(SKIN);
  ellipse(230+moveX, 232+moveY, 30);
  ellipse(370+moveX, 232+moveY, 30);
  fill(255,255,255,120);
  ellipse(235+moveX,230+moveY,10);
  ellipse(375+moveX,230+moveY,10);
  
  // 앞머리
  fill(HAIR);
  arc(300+moveX,105+moveY,90,110,PI,TWO_PI);
  fill(SKIN);
  triangle(300+moveX,65+moveY, 340+moveX,105+moveY, 260+moveX,105+moveY);

  if (faceOn) {
    drawFace();
  }

  // 눈썹
  fill(HAIR);
  quad(270+moveX,100+moveY, 290+moveX,105+moveY, 290+moveX,110+moveY, 270+moveX,105+moveY);
  quad(310+moveX,105+moveY, 330+moveX,100+moveY, 330+moveX,105+moveY, 310+moveX,110+moveY);

  // 눈동자(색 토글)
  noStroke();
  fill(EYE);
  ellipse(280+moveX,120+moveY,12);
  ellipse(320+moveX,120+moveY,12);

  // 코/입
  stroke(hairCol); strokeWeight(2);
  line(298+moveX,120+moveY,298+moveX,135+moveY);
  line(290+moveX,158+moveY,310+moveX,158+moveY);



  // 하체
  noStroke();
  fill(legCol);
  arc(300+moveX,260+moveY,80,70,0,PI);
  quad(260+moveX,260+moveY,300+moveX,260+moveY,290+moveX,370+moveY,270+moveX,370+moveY);
  quad(300+moveX,260+moveY,340+moveX,260+moveY,330+moveX,370+moveY,310+moveX,370+moveY);
  ellipse(280+moveX,370+moveY,35,25);
  ellipse(320+moveX,370+moveY,35,25);

  // 그림자
  fill('#666');
  ellipse(325+moveX,315+moveY,7,80);
  ellipse(285+moveX,315+moveY,7,80);
  fill(accent);
  ellipse(320+moveX,215+moveY,7,70);
  
  stroke(EYE); 
  strokeWeight(2);
  noFill();
  arc(280+moveX, 120+moveY, 20, 15, PI, TWO_PI, OPEN);
  arc(320+moveX, 120+moveY, 20, 15, PI, TWO_PI, OPEN);
  stroke(hairCol);
  arc(298+moveX, 140+moveY, 10, 10, HALF_PI, 3*HALF_PI, OPEN)

  //무기
  if (weaponOn) {
    drawWeapon();
  }
  
  if (bodyOn) {
    bodyClothes();
  }
}

function mousePressed() {
  // 얼굴 클릭 토글
  if (dist(mouseX, mouseY, FACE_X+moveX, FACE_Y+moveY) <= FACE_R) {
    if (faceOn === false) {
      faceOn = true;
    } else {
      faceOn = false;
    }
    return;
  }

  // 몸통 클릭 토글
  if (mouseX >= BODY_X1+moveX && mouseX <= BODY_X2+moveX && mouseY >= BODY_Y1+moveY && mouseY <= BODY_Y2+moveY) {
    if (bodyOn === false) {
      bodyOn = true;
    } else {
      bodyOn = false;
    }
    return;
  }

  // 손 클릭 토글(아무 손)
  if (dist(mouseX, mouseY, 230+moveX, 232+moveY) <= 16 || dist(mouseX, mouseY, RH_X+moveX, RH_Y+moveY) <= RH_R) {
    if (weaponOn === false) {
      weaponOn = true;
    } else {
      weaponOn = false;
    }
    return;
  }
}

function bodyClothes(){
  noStroke();
  fill(0);
  quad(260+moveX,160+moveY, 340+moveX,160+moveY, 340+moveX,340+moveY, 260+moveX, 340+moveY);
  fill('#b32222');
  quad(260+moveX, 160+moveY, 340+moveX, 160+moveY, 340+moveX, 170+moveY, 260+moveX, 170+moveY);
  quad(295+moveX, 160+moveY, 305+moveX, 160+moveY, 305+moveX, 200+moveY, 295+moveX, 200+moveY);
  ellipse(300+moveX, 220+moveY, 20);
  ellipse(310+moveX, 225+moveY, 20);
  ellipse(290+moveX, 225+moveY, 20);
  ellipse(300+moveX, 230+moveY, 20);
  
  ellipse(320+moveX, 260+moveY, 20);
  ellipse(330+moveX, 265+moveY, 20);
  ellipse(310+moveX, 265+moveY, 20);
  ellipse(320+moveX, 270+moveY, 20);
  
  ellipse(280+moveX, 300+moveY, 20);
  ellipse(290+moveX, 305+moveY, 20);
  ellipse(270+moveX, 305+moveY, 20);
  ellipse(280+moveX, 310+moveY, 20);
}

function drawFace(){
  fill(255);
  ellipse(300+moveX, 125+moveY, 60, 50);
  quad(280+moveX, 85+moveY, 320+moveX, 85+moveY, 320+moveX, 165+moveY, 280+moveX, 165+moveY);
  fill(0);
  ellipse(300+moveX, 95+moveY, 10);
  
  noFill();
  stroke('#b32222'); 
  strokeWeight(5);
  ellipse(300+moveX, 380+moveY, 140, 30);
  noStroke();
}

// 간단한 검
function drawWeapon(){
  fill('#b32222');
  stroke('#b32222'); 
  strokeWeight(6);
  line(370+moveX, 232+moveY, 400+moveX, 100+moveY);   // blade
  strokeWeight(10); // grip
  noStroke();
  triangle(400+moveX, 100+moveY, 470+moveX, 120+moveY, 395+moveX, 130+moveY);
  triangle(395+moveX, 130+moveY, 460+moveX, 140+moveY, 390+moveX, 150+moveY);
  triangle(390+moveX, 150+moveY, 450+moveX, 160+moveY, 385+moveX, 170+moveY);
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 9);
  }
}