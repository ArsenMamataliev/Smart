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
	myFunction();
	pushRndToArr();
	restart();
	timerRestartBtn();
}

function restart(){
	temperaryMemory = [];
	document.body.style.backgroundColor = "green";
	document.getElementById("startBtn").style.color = "green"
	document.getElementById("lineOfRndNum").innerHTML="_____________________";
	document.getElementById("startBtn").innerHTML = "RESTART"
	document.getElementById("notifications").innerHTML = "";
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
	    document.getElementById("lineOfRndNum").style.visibility = "visible"; 
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = additionTotal;
		break;
		case "-":
		let minusTotal = temperaryMemory.reduce((sum, current)=> sum - current);
	    (minusTotal == rightAnswer)? rgtAnswer(): wrgAnswer();
	    document.getElementById("lineOfRndNum").style.visibility = "visible";
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = minusTotal;
		break;
		case "*":
		let multiplyTotal = temperaryMemory.reduce((sum, current)=> sum * current);
	    (multiplyTotal == rightAnswer)? rgtAnswer(): wrgAnswer();
	    document.getElementById("lineOfRndNum").style.visibility = "visible";
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = multiplyTotal;
		break;
		case "/":
		let divisionTotal = temperaryMemory.reduce((sum, current)=> sum / current);
	    (divisionTotal == rightAnswer)? rgtAnswer(): wrgAnswer();
	    document.getElementById("lineOfRndNum").style.visibility = "visible";
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("randomNums").innerHTML = divisionTotal;
		break;
	} 
 
    
}
//Hide and show menu
function menuHide(x) {
	x.classList.toggle("change");
	var a = document.getElementById("settingBox");
	if (a.style.display === "block") {
		a.style.display = "none";
	  } else {
		a.style.display = "block";
	  }
}

//hide & show loader
var myVar;
function myFunction() {
	document.getElementById("loader").style.display = "block";
	document.getElementById("notifications").style.visibility = "hidden";
	document.getElementById("randomNums").style.visibility = "hidden";
	document.getElementById("lineOfRndNum").style.visibility = "hidden";
	document.getElementById("startBtn").disabled = true;
	let delayTime2 = Number(document.getElementById("delayTime").value);
    myVar = setTimeout(showPage, delayTime2 * 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
	document.getElementById("notifications").style.visibility = "visible";
	document.getElementById("randomNums").style.visibility = "visible";
} 

//set timer to enable restart button
function timerRestartBtn(){
let delayTime = Number(document.getElementById("delayTime").value);
let arraySize = Math.floor(Number(document.getElementById("arraySize").value));
setTimeout(makeEnbldBtn, 1000 * (delayTime * arraySize + 2));
}

//enabled btn
function makeEnbldBtn(){
	disldBtn = document.getElementById("startBtn").disabled = false;
}
