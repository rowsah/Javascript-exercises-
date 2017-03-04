function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if(h==0){
    h=12;
    // document.getElementById("myClock").innerHTML = 12


  }

  if(h>12){
        h= h-12;  //if hours are 13 or above subtract 12
                  //so that it doesnt display in 24hour clock mode
                  session = "PM";
  }
  h = (h < 10) ? h="0" + h:h;
  m = (m < 10) ? m="0" + m:m; //these are ternary. (condition) (?then) + condition
  s = (s < 10) ? s="0" + s:s; // or (:else) do this.
//we are adding 0 if our hours are under 10 to our hours
//otherwise just letting the default 2 digit hour show

  // if(h<10){
  //   h = "0" + h;
  //
  // }
  //
  // if(m<10){
  //   m = "0" + m          //this is all using "ifs" but the faster way is above
  //
  // }
  //
  // if(s<10){
  //   s = "0" + s
  //
  // }
  var time = h + ":" + m + ":" + s  ;
  document.getElementById("myClock").innerHTML = time;
  setTimeout(showTime,1000);
}
// showTime();
// setInterval(showTime, 1000)

// for (hours;hours>=13;hours)






  // for(minutes=0;minutes<=)
