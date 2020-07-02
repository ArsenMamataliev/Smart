//Empty array
let temperaryMemory = [];
// Push a new number to an empty array 		
function pushRndToArr() {
  var arraySize = Math.floor(Number(document.getElementById("arraySize").value));
  var maxRndNum = Number(document.getElementById("maxRndNum").value);
  var delayTime = Number(document.getElementById("delayTime").value);
  var selectMathOperation = document.getElementById("selectMathOperation").value;
  var counter = 0;
  // Time interval
  var id = setInterval(loop, delayTime * 1000);
  function loop() {
    if (counter == arraySize){  
      clearInterval(id);
      checkSum(selectMathOperation);
      document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
    } else {    
            let RndNum = Math.floor(Math.random(1) * maxRndNum) + 1;
		    temperaryMemory.push(RndNum);  
		    counter++;
		    let showRndNum = document.getElementById("randomNums");
		    showRndNum.innerHTML = RndNum ;
    }
  } 
  
}
//Start game
function start(){
	pushRndToArr();
	restart()
}

function restart(){
	temperaryMemory = [];
	document.body.style.backgroundColor = "green";
	document.getElementById("startBtn").style.color = "green"
	document.getElementById("lineOfRndNum").innerHTML="_____________________";
	document.getElementById("startBtn").innerHTML = "Restart"
	document.getElementById("notifications").innerHTML = "";	
	document.getElementById("notifications").innerHTML = "";
	document.getElementById("randomNums").innerHTML = "...";
	}
//Right answer
function rgtAnswer(){
	document.body.style.backgroundColor = "blue";
	document.getElementById("notifications").innerHTML = "Awesome";
	document.getElementById("startBtn").style.color = "blue"
}

//Wrong answer
function wrgAnswer(){
	document.body.style.backgroundColor = "red";
	document.getElementById("notifications").innerHTML = "Try again please";
	document.getElementById("startBtn").style.color = "red"
}


// Check result
function checkSum(selectMathOperation){
	let rightAnswer = +prompt("Please your answer");
	switch(selectMathOperation){
		case "+":
		let additionTotal = temperaryMemory.reduce((sum, current)=> sum + current);
	    (additionTotal == rightAnswer)? rgtAnswer(): wrgAnswer();     
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = additionTotal;
		break;
		case "-":
		let minusTotal = temperaryMemory.reduce((sum, current)=> sum - current);
	    (minusTotal == rightAnswer)? rgtAnswer(): wrgAnswer();
	    document.getElementById("randomNums").innerHTML = minusTotal;
		break;
		case "*":
		let multiplyTotal = temperaryMemory.reduce((sum, current)=> sum * current);
	    (multiplyTotal == rightAnswer)? rgtAnswer(): wrgAnswer();
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = multiplyTotal;
		break;
		case "/":
		let divisionTotal = temperaryMemory.reduce((sum, current)=> sum / current);
	    (divisionTotal == rightAnswer)? rgtAnswer(): wrgAnswer();
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = divisionTotal;
		break;
	} 
 
    
}
//Hide and show menu
function myFunction(x) {
	x.classList.toggle("change");
	var a = document.getElementById("settingBox");
	if (a.style.display === "block") {
		a.style.display = "none";
	  } else {
		a.style.display = "block";
	  }
}
