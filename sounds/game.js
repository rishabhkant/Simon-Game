

var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

$("body").keypress(function(){
    if(!started) {
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }
})

game-over


$(".btn").click(function(){

    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);
    
    sound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
})

function animatePress(currentColour){
    

    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 50);


}

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        var audio = new Audio('./sounds/wrong.mp3');
            audio.play();
        console.log("wrong");

        $("body").addClass("game-over");
        $("h1").text("Game Over! Press any key to restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
        
    }

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}



function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);

    var  randomChosenColour= buttonColours[randomNumber];
    sound(randomChosenColour);

    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    $("#level-title").text("Level " + level);
    
    level++;
}

function sound(popo){
    switch (popo){
        case "red":
            var audio = new Audio('./sounds/red.mp3');
            audio.play();
        break;

        case "blue":
            var audio = new Audio('./sounds/blue.mp3');
            audio.play();
        break;
            
        case "yellow":
            var audio = new Audio('./sounds/yellow.mp3');
            audio.play();
        break;

        case "green":
            var audio = new Audio('./sounds/green.mp3');
            audio.play();
        break;
    }
}



// $("body").keypress(function(){
//     var started = "true";
//     $("h1").text("Level 0");
//     nextSequence();
//     
// })

