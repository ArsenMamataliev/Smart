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
	document.getElementById("startBtn").disabled = "true";
	document.getElementById("gameName").innerHTML = "Good Luck!";
	pushRndToArr();
}

//Restart game
function restart(){
   //Clear temperaryMemory
	temperaryMemory = [];
    document.body.style.backgroundColor = "green";
	document.getElementById("lineOfRndNum").innerHTML="_____________________";
	start();

}

//Right answer
function rgtAnswer(){
	document.body.style.backgroundColor = "blue";
	document.getElementById("gameName").innerHTML = "Awesome";
}

//Wrong answer
function wrgAnswer(){
	document.body.style.backgroundColor = "red";
	document.getElementById("gameName").innerHTML = "Try again please";
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





