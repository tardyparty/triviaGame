

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.


// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.


// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.


// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


var questions = [
    "Ray Charles famously had this state on his mind. What is its capital? Atlanta", 
    "Okay, now, you're not an all-star of the NBA, but you did get your game on when you won the NBA's Sixth Man of the Year award in 2011. Who are you? Lamar Odom", 
    "Who was the relatively unknown patent clerk who discovered that energy equals mass times the speed of light squared? Albert Einstein", 
    "On a square-rigged ship, the sale set furthest forward is called what? Flying Jib",
    "According to a recent survey, this is the most common learning disability among American adolescents. Dislexia",
    "The standard American analog scale has a maximum capacity of what weight? 300lbs",
    "This 2001 masterpiece from Gilles Paquet-Brenner explores the intricate dynamics of a family in disarray. Les Jolies Choses"
];

var answers = [
    "Atlanta", "Fort Worth", "New York", ""
]

var correct = 0;

var incorrect = 0;

var unanswered = 0;

var currentQuestionIndex = 0;

var finished = false;


var playGame = function(){

    // press start and a new screen appears showing the first question
    $("#start").on("click", function(){
        $("#start").hide();
        $(".box").show();
        $(".answer").show();
    })

    displayQuestion();
}

var displayQuestion = function(){
    var index = 0;
    $("#question").text(questions[index]);
    finished = true;
}

// need a function that displays the question and possible answer to their respective div or button;

// the timer will start counting down first

// as soon as a button is clicked, the question will be judged right or wrong and reveal the true answer

// after a few seconds, the next question will pop up