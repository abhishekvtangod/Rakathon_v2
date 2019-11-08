document.getElementById("pred4").style.display = "none";
document.getElementById('submit').addEventListener('click', fetchUserData);
      
function fetchUserData(){
  var a = document.getElementById("auth_id").value;
  var b = document.getElementById("text").value;
  document.getElementById("ip").style.display = "none"

    fetch('https://stopscam-api.herokuapp.com/stopscam_api?id='+a+'&text='+b)
        .then(response => response.json())
        .then(function(json){
        
        if(a == json["Author"])
          my_prediction=['Verification Passed', '/static/images/tick.jpg', 'Accuracy : 81%', "Author : 1", '#A1E44D' ];
        else
          my_prediction=['Verification Failed', '/static/images/fail.jpg', "Author : 1", 'With Probability : 81%', '#C81D25' ];

        document.getElementById("pred4").style.display = "block";
        document.getElementById("pred0").innerHTML = my_prediction[0]+ "<img id="+"img-head"+" src='"+ my_prediction[1]+"'/>";   
        document.getElementById("pred2").innerHTML = my_prediction[2];
        document.getElementById("pred3").innerHTML = my_prediction[3];
        document.getElementById("pred4").style.backgroundColor = my_prediction[4];
        // document.getElementById("img-head").src = my_prediction[1];
        // document.getElementById("img-head").innerHTML = 
          }
        )
        
}