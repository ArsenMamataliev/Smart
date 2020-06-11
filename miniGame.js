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
      document.getElementById("RandomNums").innerHTML = "?";
      checkSum(selectMathOperation);
      document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
      document.getElementById("restartBtn").style.visibility = "visible";
      document.getElementById("startBtn").style.visibility = "hidden";
    } else {    
            let RndNum = Math.floor(Math.random(1) * maxRndNum) + 1;
		    temperaryMemory.push(RndNum);  
		    counter++;
		    let showRndNum = document.getElementById("RandomNums");
		    showRndNum.innerHTML = RndNum ;
    }
  } 
}
//Start game
function start(){
	document.getElementById("gameName").innerHTML = "Good Luck!";
	pushRndToArr();
}
//Clear temperaryMemory and change other settings
function makeArrayEmpty(){
	temperaryMemory = [];
	document.getElementById("lineOfRndNum").innerHTML = "...";
} 
//Restart game
function restart(){
	makeArrayEmpty()
	start();
}
// Check result
function checkSum(selectMathOperation){
	var rightAnswer = +prompt("Please your answer");
	switch(selectMathOperation){
		case "+":
		var additionTotal = temperaryMemory.reduce((sum, current)=> sum + current);
	    (additionTotal == rightAnswer)? alert("Good job!"): alert("Please try again");
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("RandomNums").innerHTML = additionTotal;
		break;
		case "-":
		var minusTotal = temperaryMemory.reduce((sum, current)=> sum - current);
	    (minusTotal == rightAnswer)? alert("Good job!"): alert("Please try again");
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("RandomNums").innerHTML = minusTotal;
		break;
		case "*":
		var multiplyTotal = temperaryMemory.reduce((sum, current)=> sum * current);
	    (multiplyTotal == rightAnswer)? alert("Good job!"): alert("Please try again");
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("RandomNums").innerHTML = multiplyTotal;
		break;
		case "/":
		var divisionTotal = temperaryMemory.reduce((sum, current)=> sum / current);
	    (divisionTotal == rightAnswer)? alert("Good job!"): alert("Please try again");
	    document.getElementById("lineOfRndNum").innerHTML = temperaryMemory;
	    document.getElementById("RandomNums").innerHTML = divisionTotal;
		break;
	} 
 
    
}





