function setup(){
    createCanvas(800,600);
    
    // Creates an array of 3 color values that will be used in the loop
    let colors = ["#916531", "#fff3de", "#ffb3d6"];

    // Sets initial x and y position for the first rectangle
    let xpos = 100;
    let ypos = 100;

    // Cycles through the array setting the fill color to each color value within
    for(let i = 0; i<3; i++){
        fill(colors[i]);
        rect(xpos,ypos,100,150);
        // Ensures that the next rectangle is 100 pixels to the right
        xpos = xpos + 100;
    }
}