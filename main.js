noseX=0;
noseY=0;

function preload() {
    mustache_face = loadImage('https://i.postimg.cc/Px4g1nMd/A-Mustache-Looks-Like-a-Big-Hairy-Smile.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }


        function draw() {
            image(video, 0, 0, 300, 300);
            image(mustache_face, noseX-10, noseY-10, 30, 30)
        }

function take_snapshot(){
    save('mustache.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose x = " + results[0].pose.nose.y);
    }
}