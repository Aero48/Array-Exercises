// Arrays for circle x and y positions  
let circleX = [0,0,0,0,0,0,0,0,0,0];
let circleY = [0,0,0,0,0,0,0,0,0,0];

function setup(){
    createCanvas(800,600);
}

function draw(){
    background("#8cc4ff");

    // Adds a new element to the end of each array and erases the first one
    // Sets the one on the end to the mouse coordinates
    circleX.push(mouseX);
    circleX.shift();

    circleY.push(mouseY);
    circleY.shift();

    // Runs through both arrays and updates the positions of the circles
    for(let i = 0; i<10; i++){
        circle(circleX[i],circleY[i],20);
    }
}