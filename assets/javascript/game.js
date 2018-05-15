$(function () {
//Global Variables
    var greenGem = Math.floor(Math.random() * 11) + 1;
    var redGem = Math.floor(Math.random() * 11) + 1;
    var purpleGem = Math.floor(Math.random() * 11) + 1;
    var blueGem = Math.floor(Math.random() * 11) + 1;
    var randGoal = Math.floor(Math.random() * 101)+19;
    var score = 0;
    var wins = 0;
    var looses = 0;


//Choose random number at the beggenning of game
    $("#randomNum").html(randGoal);

// On click functions for each gem! 
    $("#blue").click(function () {
        score = score + blueGem;
        $("#totalScore").html(score);
        checkScore();
    });

    $("#green").click(function () {
        score = score + greenGem;
        $("#totalScore").html(score);
        checkScore();
    });

    $("#red").click(function () {
        score = score + redGem;
        $("#totalScore").html(score);
        checkScore(); 
    });

    $("#purple").click(function () {
        score = score + purpleGem;
        $("#totalScore").html(score);
        checkScore();
    });

// Check if score is === to randGoal and if it is Win or Loose

    function checkScore() {
        if (score === randGoal) {
            wins++;
            $("#wins").html(wins);
//Resets game after wins or looses
            greenGem = Math.floor(Math.random() * 11) + 1;
            redGem = Math.floor(Math.random() * 11) + 1;
            purpleGem = Math.floor(Math.random() * 11) + 1;
            blueGem = Math.floor(Math.random() * 11) + 1;
            randGoal = Math.floor(Math.random() * 101)+19;
            score = 0;
            $("#randomNum").html(randGoal);
            $("#totalScore").html("");
        }

        else if (score > randGoal) {
            looses++;
            $("#looses").html(looses);
            greenGem = Math.floor(Math.random() * 11) + 1;
            redGem = Math.floor(Math.random() * 11) + 1;
            purpleGem = Math.floor(Math.random() * 11) + 1;
            blueGem = Math.floor(Math.random() * 11) + 1;
            randGoal = Math.floor(Math.random() * 101)+19;
            score = 0;
            $("#randomNum").html(randGoal);
            $("#totalScore").html("");
        }
    }


});