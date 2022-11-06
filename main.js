difference=0;
right_wrist_x=0;
left_wrist_x=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        right_wrist_x=results[0].pose.rightWrist.x;
        left_wrist_x=results[0].pose.leftWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("leftWristx= "+left_wrist_x+" rightWristx= "+right_wrist_x+" difference= "+difference);
    }
}
function draw()
{
    background('grey');
    document.getElementById("font_size").innerHTML="Font Size Of The Text Will Be = "+difference+" px";
    fill('#ff005c');
    textSize(difference);
    text('Boruto Naruto',50,400);
}