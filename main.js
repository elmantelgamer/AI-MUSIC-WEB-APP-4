song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftwrist=0;
sta_tus="";
function preload(){
    song1=loadSound("Song1.mp3");
    song2=loadSound("Song2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){

        console.log(results);
        
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("leftwristx= "+leftwristx+ " leftwristy= "+leftwristy);
        console.log("rightwristx= "+rightwristx+ " rightwristy= "+rightwristy);
    }
}