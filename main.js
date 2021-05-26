Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");

Webcam.attach('#camera');
console.log("ml5version" + ml5.version);


function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie" src="' + data_uri + '"/>';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoded);

function modelLoded() {
    console.log("modelloder has gave the command to imageclassifier");
}

function check() {
    img = document.getElementById('selfie');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) { console.error(error); } else {
        console.log(results);
        document.getElementById("finalresult").innerHTML = results[0].label;
        document.getElementById("accurate").innerHTML = results[0].confidence.toFixed(3);
    }
}