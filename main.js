Webcam.set({
    width:350,
    heigt:300,
    image_format:"png",
    png_qualiy:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takesnapchot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src='+data_uri+'"/>'
    })
    }
    console.log("ml5 version:", ml5.version)
    classfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3cvuixt-B/model.json",modelLoaded)