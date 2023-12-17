function setup(){
    canvas = createCanvas(445, 445);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(445, 445);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}

function modelLoaded(){
    console.log('Model is Loaded!');
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}
