$(document).ready(function(){
    var Random = Math.floor(Math.random()*101+33);
    console.log(Random);
    $('#number').text(Random);


var goalNumber = [];
var total= 0;	
var wins= 0;
var losses = 0;
$("#victories").text(wins);
$("#fails").text(losses);		



function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    goalNumber.push(num);
}
console.log(goalNumber);
}

fourRandomNumbers();


function reset(){
    Random = Math.floor(Math.random()*101+33);
    console.log(Random);
    $('#number').text(Random);
    goalNumber = [];
    fourRandomNumbers();
    total= 0;
    $('#Combined').text(total);
    } 

function winner(){
alert("Winner!!!");
    wins++;	
    $("#victories").text(wins);
    reset();
}


function loser(){
alert ("Loser!!!");
    losses++;
    $('#fails').text(losses);
    reset();
}




    $('#one').on ('click', function(){
        total = total + goalNumber[0];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                  
                if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }		
    });

    $('#two').on ('click', function(){
        total = total + goalNumber[1];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                if (total == Random){
                winner();
                }
                else if ( total > Random){
                    loser();
                }	
    });

    $('#three').on ('click', function(){
        total = total + goalNumber[2];
        console.log("New total= " + total);
        $('#Combined').text(total);


                    if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }	
    });	

    $('#four').on ('click', function(){
        total = total + goalNumber[3];
        console.log("New total= " + total);
        $('#Combined').text(total);	

            
                    if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }
    });  	

});	


//var randomNumber = 5;
//var totalScore = 0;
//var crystal1 = 0;


//The randomNumber is going to be a math.Random thing.  It'll be between 50 - 100 (maybe) Use math.Floor
//Each crystal will be assigned a random value
//Each crystal will need to be parseInt'd 
//There will be an onlick event for when the user clicks on the crystal
//The value of the totalScore will be increased
//if totalScore is greater than randomNumber, player loses
//else if totalScore is === randomNumber, player wins
//if player wins, alert('Winner!!!');
//if totalScore is < randomNumber, the player will be able to keep clicking on cystals to continue