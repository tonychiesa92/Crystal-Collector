
// set variables
var randomTarget = Math.floor(Math.random() * 101) + 19;
var randomC1 = Math.floor(Math.random() * 12) + 1;
var randomC2 = Math.floor(Math.random() * 12) + 1;
var randomC3 = Math.floor(Math.random() * 12) + 1;
var randomC4 = Math.floor(Math.random() * 12) + 1;
var totalScore = 0;
var wins = 0;
var lossses = 0;


$("#target-num").text(randomTarget);
$("#c1").text(randomC1);
$("#c2").text(randomC2);
$("#c3").text(randomC3);
$("#c4").text(randomC4);
$("#total-score").text(totalScore);
$("#numberWins").text("Wins: " + wins);
$("#numberLosses").text("Losses: " + lossses);


$("#c1").on("click", function () {
    totalScore = totalScore + randomC1;

    $("#total-score").text(totalScore);
    if (totalScore === randomTarget) {
        winFunction();
    }
    else if (totalScore > randomTarget) {
        looseFunction();
    }
});

$("#c2").on("click", function () {
    totalScore = totalScore + randomC2;

    $("#total-score").text(totalScore);
    if (totalScore === randomTarget) {
        winFunction();
    }
    else if (totalScore > randomTarget) {
        looseFunction();
    }
});

$("#c3").on("click", function () {
    totalScore = totalScore + randomC3;

    $("#total-score").text(totalScore);
    if (totalScore === randomTarget) {
        winFunction();
    }
    else if (totalScore > randomTarget) {
        looseFunction();
    }
});

$("#c4").on("click", function () {
    totalScore = totalScore + randomC4;

    $("#total-score").text(totalScore);
    if (totalScore === randomTarget) {
        winFunction();
    }
    else if (totalScore > randomTarget) {
        looseFunction();
    }
});

function winFunction(){
    wins ++;
    $("#numberWins").text("Wins: " + wins);
}

function looseFunction(){
    lossses ++;
    $("#numberWins").text("Losses: " + lossses);
}



//select random # b/w 19-120, then display
//set random values to crystals b/w 1-12, hide value until clicked on
// start total score=0
// on click add value of crystal to total score
// if (total score= random#)
//      win++
//      "winner! play again!"
// reset all random #'s and score 
//else if( total score > random #)
//      losses ++
//      "you lost, play agian"
//reset all random #'s and score 

// $(".crystal").on("click", function(){

//     // determine which button was pressed--alert
//     // get value of that id
//     // add to total score


//     // run function: winner/losser with a reset
//         //status(totalScore)
//     // var crystal = $(".crystal");
//     // //     $(this).val({
//     // //         "data-random": random
//     //         totalScore += $(this).val();

//     //     });
//     // });
// });

// function status(value){
//     //did they win
//         // reset

//     //did they lose
//         // reset

//     //if no win or loss 
//         // display new total score
// }