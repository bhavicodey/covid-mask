noseX = 0;
noseY = 0;

function preload(){
    mask_nose = loadImage('https://i.postimg.cc/05nr009X/mask.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); // initilize posenet
    poseNet.on('pose', gotPoses) // figure out what user is doing/ x and y coordinates
}

function modelLoaded() { // console function
    console.log("PostNet is initialized!")
}

function gotPoses(results) {  
    if (results.length > 0) { // if length is nothing (to check if any errors)
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mask_nose, noseX, noseY, 50, 50);
}

function take_snapshot(){
    save('astronaut_face.png')
}