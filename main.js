objects = []

function setup() {
    canvas = createCanvas(380, 380)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("cat").innerHTML = "Status : CATTTTT"
    video = createCapture(VIDEO)
    video.size(380, 380)
    video.hide()
}

function start(){
   objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
   document.getElementById("cat").innerHTML = "Status : CATTTTT"
}


statu = ""


function preload() {
    img = loadImage("dog_cat.jpg")
}

function draw() {
    image(video, 0, 0, 380, 380);

    if (statu != "") {
        r = random(255)
        g = random(255)
        b = random(255)

        a = random(255)
        c = random(255)
        l = random(255)
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("cat").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(a, c, l);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!")  
    statu = true
}

function gotResult(error, results) {
    if (error) {
        console.log(error, "error")
    }
    console.log(results, "play roblox with Anirudh or this won't work")
    objects = results
}