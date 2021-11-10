function preload() {
}

function setup() { // canvas function
    canvas = createCanvas(640, 480); // size of canvas
    canvas.position(110, 250); // x and y position of canvas
    video = createCapture(VIDEO); // ability to take picture while video still running
    video.hide(); // hide the video

    tint_color = ""; // variable to allow user to write their filter color
}

function draw() { // ability to change color function
    image(video, 0, 0, 640, 480); // resolution of video (to keep it the same resolution regardless of user's device)
    tint(tint_color); // tint = place of colors 
}

function take_snapshot(){ 
    save(tint_color + "_image.png"); 
}

function filter_tint() { // end result
    tint_color = document.getElementById("color_name").value; // to set the filter into the html so it can display
}