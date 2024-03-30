function myFunctionStart(){
    var random = Math.floor(Math.random() * 9 + 1);
    document.getElementById("random").innerHTML = random
    var num = random;


    var nickNameInputs = document.getElementById("nickNameInputs");
    var ageInputs = document.getElementById("ageInputs");

    nickNameInputs.innerHTML = ""; 
    ageInputs.innerHTML = "";

    for (var i = 0; i < num; i++) {
        //create element nickname input
    var nickNameInput = document.createElement("input");
    nickNameInput.type = "text";
    nickNameInput.placeholder = "Nickname";
        //create element Age input
    var ageInput = document.createElement("input"); 
    ageInput.type = "text";
    ageInput.placeholder = "Age";
  

    var br = document.createElement("br");
        //both append child in nickNameInputs 
    nickNameInputs.appendChild(nickNameInput); 
    nickNameInputs.appendChild(document.createTextNode(" ")); 
    nickNameInputs.appendChild(ageInput); 
    nickNameInputs.appendChild(br); 
    }
    document.getElementById("resetButton").style.margin = "auto";
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("TypeButton").style.display = "inline";
    document.getElementById("Number").style.display = "block";
    document.querySelector('button').disabled = true;

}



function myFunctionreset() {
    document.getElementById("random").innerHTML = ""; 
    document.getElementById("resetButton").style.display = "";
    document.getElementById("TypeButton").style.display = "";
    document.querySelector('button').disabled = false;
    document.getElementById("nickNameInputs").innerHTML = "";
    document.getElementById("totalage").innerHTML = "";
    document.getElementById("sumButton").style.display = "";
    document.getElementById("AButton").style.display = "";
    document.getElementById("minButton").style.display = "";
    document.getElementById("maxButton").style.display = "";


    document.getElementById("showtotal").style.display = "";
    document.getElementById("showaverage").style.display = "";
    document.getElementById("showNameMin").style.display = "";
    document.getElementById("showNamemin").style.display = "";
    document.getElementById("Minage").style.display = "";
    document.getElementById("showNameMax").style.display = "";
    document.getElementById("showNamemax").style.display = "";
    document.getElementById("Maxage").style.display = "";
    document.getElementById("Number").style.display = "";
    document.getElementById("result").style.display = "";
}



function calClick() {
    document.getElementById("sumButton").style.display = "inline";
    document.getElementById("AButton").style.display = "inline";
    document.getElementById("minButton").style.display = "inline";
    document.getElementById("maxButton").style.display = "inline";


  }
  




function MouseEnter(){
    var button = document.getElementById("TypeButton");
    button.textContent = "Click Me!";
    button.color
}

function MouseLeave(){
    var button = document.getElementById("TypeButton");
    button.textContent = "Type of Calculate!";
}
  


function myFunctionsum() {
    var totalAge = 0;
    var inputdata = document.getElementById("nickNameInputs").getElementsByTagName("input");
   
    

    for (var i = 0; i < inputdata.length; i++) {
    if (i % 2 === 0) { 
        var ageInput = inputdata[i + 1]; 
        var nameInput = inputdata[i]; 
        var age = parseInt(ageInput.value);
        var name = nameInput.value.trim();

        if (name === "" || isNaN(age)) {
            alert("Please fill in all the required information.");

            return;
        }else if(age <= 0 ){
            alert("Please enter the correct information.");
            document.getElementById("showtotal").innerHTML = ""
            return;
        }


        if (!isNaN(age)) {
            totalAge += age;
        }
    }
}   

    document.getElementById("showtotal").style.display = "inline-block";
    document.getElementById("totalage").innerHTML = totalAge
    document.getElementById("showaverage").style.display = "";
    document.getElementById("showNameMin").style.display = "";
    document.getElementById("showNamemin").style.display = "";
    document.getElementById("Minage").style.display = "";
    document.getElementById("showNameMax").style.display = "";
    document.getElementById("showNamemax").style.display = "";
    document.getElementById("Maxage").style.display = "";

 
    
}

function myFunctionaverage() {
    var totalAge = 0;
    var inputdata = document.getElementById("nickNameInputs").getElementsByTagName("input");
   
    

    for (var i = 0; i < inputdata.length; i++) { //0 1 
    if (i % 2 === 0) { 
        var ageInput = inputdata[i + 1]; 
        var nameInput = inputdata[i]; 
        var age = parseInt(ageInput.value);
        var name = nameInput.value.trim();

        if (name === "" || isNaN(age)) {
            alert("Please fill in all the required information.");
            document.getElementById("showaverage").innerHTML = ""
            return;
        }else if(age <= 0 ){
            alert("Please enter the correct information.");
            document.getElementById("showaverage").innerHTML = ""
            return;
        }


        if (!isNaN(age)) {
            totalAge += age;
        }
    }
}
  
    document.getElementById("showaverage").style.display = "inline-block";
    document.getElementById("Averageage").innerHTML = totalAge/(inputdata.length/2);
    document.getElementById("showtotal").style.display = "";
    document.getElementById("showNameMin").style.display = "";
    document.getElementById("showNamemin").style.display = "";
    document.getElementById("Minage").style.display = "";
    document.getElementById("showNameMax").style.display = "";
    document.getElementById("showNamemax").style.display = "";
    document.getElementById("Maxage").style.display = "";
    
   
 
    
}

function myFunctionmin(){

    var inputdata = document.getElementById("nickNameInputs").getElementsByTagName("input");
    var minAge = Infinity;
    var youngest = [];


for (var i = 1; i < inputdata.length; i += 2) {
    var age = parseInt(inputdata[i].value);
    var name = inputdata[i - 1].value.trim();
    if (isNaN(age) || age <= 0 || name === "" ) {
        alert("Please fill in all the required information.");
        return;
    }else if (age < minAge) {
        youngest = [name];
        minAge = age;
    } else if (age === minAge) {
        youngest.push(name);
    }
}


if (youngest.length === 1 ) {
   
    document.getElementById("showNameMin").style.display = "inline-block";
    document.getElementById("equal").innerHTML = " => age : ";
    document.getElementById("showNamemin").innerHTML = youngest;
    document.getElementById("Minage").innerHTML = minAge;
}else if(youngest.length > 1){

    document.getElementById("showNameMin").style.display = "inline-block";
    document.getElementById("showNamemin").innerHTML = youngest.join(", ");
    document.getElementById("equal").innerHTML = "";
    document.getElementById("Minage").innerHTML = "";
}
    document.getElementById("showtotal").style.display = "";
    document.getElementById("showaverage").style.display = "";
    document.getElementById("showNameMax").style.display = "";
    document.getElementById("showNamemax").style.display = "";
    document.getElementById("Maxage").style.display = "";
    

}

function myFunctionmax(){

    var inputdata = document.getElementById("nickNameInputs").getElementsByTagName("input");
    var maxAge = 0;
    var oldest = [];

for (var i = 1; i < inputdata.length; i += 2) {
    var age = parseInt(inputdata[i].value);
    var name = inputdata[i - 1].value.trim();
    if (isNaN(age) || age <= 0 || name === "" ) {
        alert("Please fill in all the required information.");
        return;
    }else if (age > maxAge) {
        oldest = [name];
        maxAge = age;
    } else if (age === maxAge) {
        oldest.push(name);
    }
}


if (oldest.length === 1 ) {
   
    document.getElementById("showNameMax").style.display = "inline-block";
    document.getElementById("equalM").innerHTML = " => age : ";
    document.getElementById("showNamemax").innerHTML = oldest;
    document.getElementById("Maxage").innerHTML = maxAge;
}else if(oldest.length > 1){
 
    document.getElementById("showNameMax").style.display = "inline-block";
    document.getElementById("showNamemax").innerHTML = oldest.join(", ");
    document.getElementById("equalM").innerHTML = "";
    document.getElementById("Maxage").innerHTML = "";

}
    document.getElementById("showtotal").style.display = "";
    document.getElementById("showaverage").style.display = "";
    document.getElementById("showNameMin").style.display = "";
    document.getElementById("showNamemin").style.display = "";
    document.getElementById("Minage").style.display = "";


}






