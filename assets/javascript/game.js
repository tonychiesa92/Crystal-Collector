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




$(".buttons").on("click", function(){

    var crystal = $(".crystal");

    crystal.each(function () {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);
        $(this).attr({
            "data-random": random
        });
    });
});
