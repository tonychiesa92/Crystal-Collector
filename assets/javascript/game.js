
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

function winFunction() {
    wins++;
    $("#numberWins").text("Wins: " + wins);
    reset();
}

function looseFunction() {
    lossses++;
    $("#numberLosses").text("Losses: " + lossses);
    reset();
}

function reset() {
    randomTarget = Math.floor(Math.random() * 101 + 19);
    $("#target-num").text(randomTarget);

    randomC1 = Math.floor(Math.random() * 12) + 1;
    randomC2 = Math.floor(Math.random() * 12) + 1;
    randomC3 = Math.floor(Math.random() * 12) + 1;
    randomC4 = Math.floor(Math.random() * 12) + 1;
    
    totalScore = 0;
    $("#total-score").text(totalScore);
}