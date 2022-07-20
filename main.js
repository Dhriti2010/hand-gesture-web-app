prediction1="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("Camera");
Webcam.attach(camera);
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    });
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5R939aXlT/model.json',modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
      
        prediction1=results[0].label;
        prediction2=results[1].label;
        
        if (prediction1=="amazing"){
            document.getElementById("result_emoji").innerHTML="&#128076";
            document.getElementById("result_emotion").innerHTML="Amazing";
        }
        if (prediction1=="ok"){
            document.getElementById("result_emoji").innerHTML="&#128077";
            document.getElementById("result_emotion").innerHTML="All the best/ok";
        }
        if (prediction1=="peace"){
            document.getElementById("result_emoji").innerHTML="&#9996";
            document.getElementById("result_emotion").innerHTML="Peace/Victory"; 
        }  
        if (prediction1=="yo"){
            document.getElementById("result_emoji").innerHTML="&#129304";
            document.getElementById("result_emotion").innerHTML="yo";
        }             
    }
}
    
