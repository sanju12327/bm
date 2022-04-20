objects = [];
video = "";
status="";

function preload()
{
    alarm = loadSound("alarm.mp3");
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("baby_status").innerHTML = "Status : Detecting Objects"
}


function modelLoaded()
{
    status = true;
    console.log("Model Loaded!");
}

function draw() 
{
    image(video, 0, 0, 480, 380); 
    if(status != "") 
    { objectDetector.detect(video, gotResult); 
    for (i = 0; i < objects.length; i++) 
    { 
        if(objects[i].label == "person")
        {
    document.getElementById("baby_status").innerHTML = "Baby Found"; 
    alarm.stop();
} else {
    document.getElementById("baby_status").innerHTML = "Baby Not Found";
    alarm.play();
} 
} }


function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    objects = results;
    console.log(results);
}}