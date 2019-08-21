var quiz = [
    {
        question: "Ray Charles famously had this state on his mind. What is its capital?",
        options: ["Atlanta", "New York", "Los Angeles", "Austin"],
        correctAnswer: "Atlanta",
        img: "assets/images/atlanta.jpg" 
    },
    {
        question: "Okay, now, you're not an all-star of the NBA, but you did get your game on when you won the NBA's Sixth Man of the Year award in 2011. Who are you?",
        options: ["Michael Jordan", "Magic Johnson", "Lamar Odom", "Larry Bird",],
        correctAnswer: "Lamar Odom",
        img: "assets/images/lamarOdom.jpg"
    },
    {
        question: "Who was the relatively unknown patent clerk who discovered that energy equals mass times the speed of light squared?",
        options: ["Thomas Edison", "Albert Einstein", "Alexander Graham Bell", "Henry Ford"],
        correctAnswer: "Albert Einstein",
        img: "assets/images/albert.jpg"
    },
    {
        question: "On a square-rigged ship, the sale set furthest forward is called what?",
        options: ["Flying Jib", "Spinnaker", "Genoa", "Main Sail"],
        correctAnswer: "Flying Jib",
        img: "assets/images/flyingJib.jpg"
    },
    {
        question: "According to a recent survey, this is the most common learning disability among American adolescents.",
        options: ["ADD", "Dislexia", "Illiteracy", "ADHD"],
        correctAnswer: "Dislexia",
        img: "assets/images/dislexia.jpeg"
    },
    {
        question: "The standard American analog scale has a maximum capacity of what weight?",
        options: ["250lbs", "300lbs", "350lbs", "500lbs"],
        correctAnswer: "300lbs",
        img: "assets/images/300lb.jpg"
    },
    {
        question: "This 2001 masterpiece from Gilles Paquet-Brenner explores the intricate dynamics of a family in disarray.",
        options: ["Sarah's Key", "Crooked House", "Walled In", "Les Jolie Choses"],
        correctAnswer: "Les Jolie Choses",
        img: "assets/images/lesJolie.jpg"
    }  
];

// global variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let counter = 3;
let smallCounter = 5;
let index = 0;
let timer;
let smalltimer;

// loads the question and answer page 
function displayQuestion(){

    counter = 3;
    timer = setInterval(countDown, 1000);

    const question = quiz[index].question;
    const options = quiz[index].options;

    $("#game").html(`
    <h1 id="timer" class="box">${counter}</h1>
    <h1 class="box">${question}</h1>
    ${displayAnswer(options)}
    `);
}

// creates a button for each answer option 
function displayAnswer(options){

    let result = '';

    for (var i=0; i< options.length; i++){
        result += `<button class="answer" data-answer="${options[i]}">${options[i]}</button>`; 
    }

    return result;
}

// assesses if quiz is finished and proceeds to the next one
function nextQuestion(){

    const isFinished = (quiz.length - 1) === index;

    if (isFinished){
        // todo
        displayResult();
    }
    else {
        index++;
        displayQuestion();
    }
}

function timeUp(){

    clearInterval(timer);
    unanswered++;
    didNotAnswer();
}

function countDown(){

    counter--;

    $("#timer").html(counter);

    if (counter === 0) {
        timeUp();
    }
}

$(document).on("click", ".answer", function(){

    clearInterval(timer);
    const userAnswer = $(this).attr("data-answer");
    const correctAnswer = quiz[index].correctAnswer;

    if(userAnswer === correctAnswer){
        correct++;
        // nextQuestion();
        correctPage();
    }
    else{
        incorrect++;
        // nextQuestion();
        wrongPage();
    }
});

function correctPage(){

    // starts a 5 second clock before proceeding to next question
    smallCounter = 5;
    smalltimer = setInterval(smallerCountDown, 1000);

    const nextPage = `
    <div class="correctAnswer">Yes! ${quiz[index].correctAnswer} is Correct. </div>
    <img class="correctImg" src="${quiz[index].img}"> 
    `;

    // shows the correct answer and images 
    $("#game").html(nextPage);
}

function wrongPage(){

    // starts a 5 second clock before proceeding to next question
    smallCounter = 5;
    smalltimer = setInterval(smallerCountDown, 1000);

    const nextPage = `
    <div class="correctAnswer">Sorry! The Correct Answer was: ${quiz[index].correctAnswer}</div>
    <img class="correctImg" src="${quiz[index].img}"> 
    `;

    // shows the correct answer and images 
    $("#game").html(nextPage);
}

function didNotAnswer(){

    // starts a 5 second clock before proceeding to next question
    smallCounter = 5;
    smalltimer = setInterval(smallerCountDown, 1000);

    const nextPage = `
    <div class="correctAnswer">Sorry, Time's Up! The Answer was ${quiz[index].correctAnswer}</div>
    <img class="correctImg" src="${quiz[index].img}"> 
    `;

    // shows the correct answer and images 
    $("#game").html(nextPage);
}

function smallerCountDown(){
    smallCounter--;
    console.log(smallCounter);
    if(smallCounter === 0){
        nextQuestion();
        clearInterval(smalltimer);
    }
}

function displayResult(){

    const result = `
    <p>Correct: ${correct}</p>
    <p>Incorrect: ${incorrect}</p>
    <p>Unanswered: ${unanswered}</p>
    <div id="playAgain">Play Again</div>
    `;

    $("#game").html(result);
    $("#playAgain").on("click", function(){
        resetGame();
    })
}

function resetGame(){
    $("#start").show();
    $("#game").hide();
    index = 0;
}