// Nice work, Ron.  Your application works well
// and you've followed all the requirements.  I did have a
// concern about the requirement around having the
// 'getRandomeGamePiece()'' take a parameter - so it should
// have looked like this 'getRandomGamePiec(arrayLength)', but
// I saw you had another function that was named different but did
// exactly that.  That will suffice.  Well done.
// 10/10







  function getRandomGamePiece(){

    var decision = prompt("We're playing Rock, Paper, Scissors, Dynamite! What do you choose?")
//unfortunately the array is case sensitive
                  var gamePieces = ["Rock", "Paper", "Scissors", "Dynamite"];


              rIndex = gamePieces[getRandomIndex(gamePieces.length)];



                var results = rIndex

                whoWins()

        while(decision.length==0){
                    // to get in here, enteredAge must be ''  (empty string)
                    alert("Play!");
                    var decision = prompt("We're playing Rock, Paper, Scissors, Dynamite! What do you choose?")
                    //the prompt will ask for the value //will work with capital first value.
                    // redisplay the prompt and set the variable to the entered value

                }

function whoWins(){

  //Every choice has 3 possible outcomes
  //I've split them up as follows //paper first

                  if (decision == "Paper" && results == "Scissors") {

                    document.getElementById("description").innerHTML = "You lost, " + " I chose:"

                  }
                      else if(decision=="Paper" && results == "Dynamite"){

                        document.getElementById("description").innerHTML = "You lost, " + " I chose:"


                      }

                          else if(decision=="Paper" && results == "Rock"){

                            document.getElementById("description").innerHTML = " You win this time, " + " I chose:"


                          }



//rock second

                    if (decision == "Rock" && results == "Paper") {

                      document.getElementById("description").innerHTML = "You lost, " + " I chose:"

                    }
                          else if(decision=="Rock" && results == "Dynamite"){

                            document.getElementById("description").innerHTML = "You lost, " + " I chose:"

                            }

                                else if(decision=="Rock" && results == "Scissors"){

                                  document.getElementById("description").innerHTML = " You win this time, " + " I chose:"

                                  }




//scissors third

                    if (decision == "Scissors" && results == "Rock") {

                      document.getElementById("description").innerHTML = "You lost, " + " I chose:"

                    }
                          else if(decision=="Scissors" && results == "Paper"){

                              document.getElementById("description").innerHTML =  " You win this time, " + " I chose:"

                            }

                              else if(decision=="Scissors" && results == "Dynamite"){

                                  document.getElementById("description").innerHTML = " You win this time, " + " I chose:"

                                    }





//dynamite last

                  if (decision == "Dynamite" && results == "Scissors") {

                    document.getElementById("description").innerHTML = "You lost, " + " I chose:"

                    }
                            else if(decision=="Dynamite" && results == "Rock"){

                              document.getElementById("description").innerHTML = " You win this time, " + " I chose:"

                                  }

                                  else if(decision=="Dynamite" && results == "Paper"){

                                    document.getElementById("description").innerHTML = " You win this time, " + " I chose:"

                                        }

//and a tie if statement

                    if (decision == results) {

                      document.getElementById("description").innerHTML = "It's a tie. Boring. I chose:"

// I wanted to make sure it all made sense so I worded my if statements so that the result would display
//on the next line and still make sense.
                                    }


                                    $(document).ready(function(){
                                              $("#results").html(results);

                                                  })





                            }


                        }




    function getRandomIndex(arrayLength){

    var rnd = Math.floor((Math.random() * arrayLength) + 0);

    return rnd;
            }
