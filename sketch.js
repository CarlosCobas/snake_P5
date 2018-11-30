let snake;
const scl = 20;
let pllt;
let canvasWidth = 600;
let canvasHeight = 600;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    snake = new Snake;
    frameRate(10);
    pickLocation();
    
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    pllt = createVector(floor(random(cols)),floor(random(rows)));
    pllt.mult(scl);
}

function draw(){
    background(51);

    if(snake.eat(pllt)){
        pickLocation();
    }

    snake.death();
    snake.update();
    snake.show();

    fill(255,0,255);
    rect(pllt.x, pllt.y, scl, scl);
}

function keyPressed(){
    if(snake.lastDir !== "DOWN" && keyCode === UP_ARROW){
        snake.dir(0, -1);
        snake.lastDir = "UP";
    }
    else if(snake.lastDir !== "UP" && keyCode === DOWN_ARROW){
        snake.dir(0, 1);
        snake.lastDir = "DOWN";
    }
    else if(snake.lastDir !== "RIGHT" && keyCode === LEFT_ARROW){
        snake.dir(-1, 0);
        snake.lastDir = "LEFT";
    }
    else if(snake.lastDir !== "LEFT" && keyCode === RIGHT_ARROW){
        snake.dir(1, 0);
        snake.lastDir = "RIGHT";
    }
}

