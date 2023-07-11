
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/naH3pEykc/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML='I CAN HEAR - '+ results[0].label;
 document.getElementById("result_confidence").innerHTML='ACCURACY- '+ (results[0].confidence*100).toFixed(2)+"%";
   document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

   img=document.getElementById('image');
    
   if(results[0].label=="Background Noise" ){
    image.src='th.jpg';
    
   }

   if(results[0].label=="cat" ){
    image.src='th(1).jpg';
    
   }

   if(results[0].label=="cow" ){
    image.src='th(2).jpg';
    
   }

   if(results[0].label=="crow" ){
    image.src='th(3).jpg';
    
   }

   if(results[0].label=="dog" ){
    image.src='th(4).jpg';
    
   }
}
}