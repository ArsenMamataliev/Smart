/*function showTime(){
	while(true){
let time = new Date();
setInterval(function(){
console.log(time)
}
 ,1000);
}
} 
showTime();*/
 
/* const user = {
 	name: 'Arsen',
 	age:  27
 }

 console.log(Object.entries(user));*/

/* let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

//1
function sumSalaries(salaries){
let totalSalary=0;  
	for(wages of Object.values(salaries)){
	 totalSalary += wages;
    };
return totalSalary;
}
alert( sumSalaries(salaries) ); // 650
*/

//2
/*let user = {
  name: 'John',
  age: 30
};
function count(prop) {
return Object.keys(prop).length;
}
alert(count(user)); // 2*/



/*let numbers = [];
let randomNumber = function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let quantityOfNumbers = 5;
let counter = 0;
function arsen(){
  while(counter < quantityOfNumbers){
      setInterval( function(){
        console.log('fdf');
      }, 1000)
  }				
}
arsen()*/

/*let arr = [1, 2, 4, 5, 6, 7, 8, 100, 1000];
let [one, two, ,five, ...rest] = arr;
console.log(one);
console.log(five);
console.log(rest[1]);
console.log(rest[2]);
console.log(rest.length);
for(item of arr){
	console.log(item);
}
*/
/*et user = {
	name: 'Arsen',
	age: 27
}

let {name, age} = user;
console.log(name);
console.log(age);
console.log(user.name);
 
let [firsName, lastName] = "Arsen Mamataliev".split(' ');
console.log(lastName);
console.log(typeof arr);*/

/*et user = {
  name: "John",
  years: 30
};

let {name, age, isAdmin = true} = user;
console.log(name);

let data = new Date();
console.log(data);
console.log(data.getFullYear());
console.log(data.getMonth());*/

let arr = [];
function pushArr(arraySize) {
    let counter = 0; 
    while( counter < arraySize ) {
    let RndNum = Math.floor(Math.random() * 100);
    arr.push(RndNum);  
     }  
}
pushArr(100);
console.log(arr);