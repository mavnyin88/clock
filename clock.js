

// setInterval(function(){
// var curDate = new Date();
// document.getElementById("change").innerHTML = curDate;
// }, 1000)


setInterval(function(){
var curDate = new Date();
if(curDate.getHours() > 12){
document.getElementById("hour").innerHTML = curDate.getHours() - 12;
}
else{
document.getElementById("hour").innerHTML = curDate.getHours();	
}
if(curDate.getMinutes() < 10){
document.getElementById("minutes").innerHTML = "0"+curDate.getMinutes();
}
else{
	document.getElementById("minutes").innerHTML = curDate.getMinutes();
}
document.getElementById("seconds").innerHTML = curDate.getSeconds();
document.getElementById("milliseconds").innerHTML = curDate.getMilliseconds();
}, 1000)

// function getDay() { }
// curDate.getDay()
// curDate.getHour()
// curDate.min