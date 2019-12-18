// DOM elements
// Sub containers
var welcome = document.getElementById("welcome");
var questionList = document.getElementById("questionList");
var ending = document.getElementById("ending");
var scoresList = document.getElementById("scoresList");

// Text
var timer = document.getElementById("timer");
var quesPrompt = document.getElementById("question-prompt");
var finScore = document.getElementById("final-score");
var scoreTally = document.getElementById("scoreTally");

// Input
var initials = document.getElementById("initials");

// Buttons
var hiScoresBtn = document.getElementById("high-scores");
var startBtn = document.getElementById("start-btn");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var submitScoreBtn = document.getElementById("submit");
var restartBtn = document.getElementById("restart");
var clearBtn = document.getElementById("clear");

// Timer
var timer = 60;
var timerCountdown = document.getElementById("timer");
var timerReference = undefined;

var currentQuestion = 0;
var userScores = JSON.parse(localStorage.getItem("scoreArr"));


// Questions
var questions = [
    {
        question: "What is the world's largest island?",
        choices: ["Hawaii", "Iceland", "Greenland", "Austrailia"],
        answer: "Greenland"
    },
    {
        question: "What is the world's longest river?",
        choices: ["Amazon River", "Nile River", "Colorado River", "Mississippi River"],
        answer: "Amazon River"
    },
    {
        question: "What is the world's largest ocean?",
        choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the diameter of the Earth?",
        choices: ["8,000 miles", "24,000 miles", "16,000 miles", "1,000 miles"],
        answer: "8,000 miles"
    },
    {
        question: "What is the world's most populous country?",
        choices: ["United States", "India", "Russia", "China"],
        answer: "China"
    }
];

$(document).ready(function () {
// Initial state of all divs
    questionList.style.display = "none";
    ending.style.display = "none";
    scoresList.style.display = "none";

// Start quiz - start first question; start timer
    $("#start-btn").on("click", function () {
        welcome.style.display = "none";
        questionList.style.display = "block";

        quesPrompt.textContent = questions[0].question;
        answer1.textContent = questions[0].choices[0];
        answer2.textContent = questions[0].choices[1];
        answer3.textContent = questions[0].choices[2];
        answer4.textContent = questions[0].choices[3];

        timerReference = window.setInterval(function () {
            timer--;
            if(timer === 0) {
                endScore();
            } else {
                $("#timer").text(timer);
            };
        }, 1000);
    });

// Cycle through questions - click answers, send to next question, deduct 10 seconds from time if wrong
    $(".btn-block").on("click", function (event) {
        event.preventDefault();
        currentQuestion++;
        if(currentQuestion < 5){
            quesPrompt.textContent = questions[currentQuestion].question;
            answer1.textContent = questions[currentQuestion].choices[0];
            answer2.textContent = questions[currentQuestion].choices[1];
            answer3.textContent = questions[currentQuestion].choices[2];
            answer4.textContent = questions[currentQuestion].choices[3];
        } else {
            endScore();
        };

        // Deduct 10 seconds from time for wrong answer
        var correctAnswer = questions[currentQuestion - 1].answer;
        var userAnswer = event.target.innerText;
        if(userAnswer === correctAnswer){
            alert("Correct response!");
        } else {
            alert("Incorrect response!");
            timer -= 10;
        };
        // Can't get the questions to match with the correct answer! Off by 1 for some reason
        console.log(correctAnswer);
    });

// Save score and initials with Submit button

// Can't get this to work properly :(
    $("#submit").on("click", function(){
        var names = $("#initials").val();
        var scoreArr = [names, timer];
        localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
        scoreTally.textContent = userScores;
        initScores();
    });

// Function to show the final score once quiz is complete
    function endScore () {
        ending.style.display = "block";
        questionList.style.display = "none";
        welcome.style.display = "none";
        scoresList.style.display = "none";
        $("#final-score").text("Final Score: " + timer);
        window.clearInterval(timerReference);
    };

// Function to show list of scores with initials
    function initScores () {
        scoresList.style.display = "block";
        ending.style.display = "none";
        welcome.style.display = "none";
        questionList.style.display = "none";
        scoreTally.empty();
        $.each(userScores, function (index, value){
            var initials = value[0];
            var score = value[1];
            var newScores = $("<li>");
            newScores.text(initials + " - " + score);
            scoreTally.append(newScores);
        });
    };

// High Score button
    $("#high-scores").on("click", function(){
        initScores();
    })

// Clear the local storage
    $("#clear").on("click", function(){
        userScores = [];
        localStorage.setItem("scoreArr", JSON.stringify(userScores));
        $("#scoreTally").empty();
    });

// Restart with Start Over button
    $("#restart").on("click", function(){
        location.reload();
    });

});