let circleY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let counter = 0;

function setup(){
    createCanvas(800,600);
    // Sets the fill value to light blue
    fill("#8cc4ff");
}

function draw(){
    //console.log(circleY);

    // Refreshes the background to a light pink color
    background("#fcd9ff");

    // The code inside this if statement runs every 10 frames
    if (counter == 9){
        // Adds a new element to the array with a value of 0
        circleY.push(0);
        // Removes an element from the beginning of the array
        circleY.shift();
        counter = 0;
    }
    
    counter++;

    // Updates all the elements in the array (the y values of the circles) and draws the circles on every frame
    for(let i = 0; i < circleY.length; i++){
        circleY[i] = circleY[i] + 5;
        circle(400, circleY[i], 10);
    }

}