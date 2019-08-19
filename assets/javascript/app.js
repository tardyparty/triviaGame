

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.


// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.


// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.


// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


var questions = [
    {
        Q: "Ray Charles famously had this state on his mind. What is its capital?",
    },
    {
        Q: "Okay, now, you're not an all-star of the NBA, but you did get your game on when you won the NBA's Sixth Man of the Year award in 2011. Who are you?",
    },
    {
        Q: "Who was the relatively unknown patent clerk who discovered that energy equals mass times the speed of light squared?",
    },
        {Q: "On a square-rigged ship, the sale set furthest forward is called what?",
    },
    {
        Q: "According to a recent survey, this is the most common learning disability among American adolescents.",
    },
    {
        Q: "The standard American analog scale has a maximum capacity of what weight?",
    },
    {
        Q: "This 2001 masterpiece from Gilles Paquet-Brenner explores the intricate dynamics of a family in disarray.",
    }  
];

// the correct answer is randomized manually in answers array
var answers = [
    "Atlanta", "New York", "Los Angeles", "Austin",
    "Michael Jordan", "Magic Johnson", "Lamar Odom", "Larry Bird",
    "Thomas Edison", "Albert Einstein", "Alexander Graham Bell", "Henry Ford",
    "Flying Jib", "Spinnaker", "Genoa", "Main Sail",
    "250lbs", "300lbs", "350lbs", "500lbs",
    "Dark Places", "Walled In", "Sarah's Key", "Les Jolies Choses"
]

// scoring
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// display
var currentQuestionIndex = 0;
var answerIndex = 0;
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
    // displays q and a into html
    $("#question").text(questions[currentQuestionIndex].Q);

    // answers are ++ after each display to go through all 4 possibilities
    $("#answer1").text(answers[answerIndex]);
    answerIndex++;
    $("#answer2").text(answers[answerIndex]);
    answerIndex++;
    $("#answer3").text(answers[answerIndex]);
    answerIndex++;
    $("#answer4").text(answers[answerIndex]);
    answerIndex++;

    acceptAnswer();

}


// creat an objcet for the images and text to be displayed for each image.

// need a function that displays the question and possible answer to their respective div or button;

// the timer will start counting down first

// as soon as a button is clicked, the question will be judged right or wrong and reveal the true answer

// after a few seconds, the next question will pop up