function showTime(){

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";

if (h==0){
  h = 12;

}

if(h>12){
h = h - 12;


}

// h = (h<10) ? "0" + h:h;  // concept the same as the if statement with hours below
m = (m<10) ? "0" + m:m;
s = (s<10) ? "0" + s:s

if(h<10){
h = "0" + h


}

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("myClock").innerHTML = time
setTimeout(showTime, 1000)
}
