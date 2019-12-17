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

var currentQuestion = 0;

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

// Event listeners

// Submit initials

// Clear high scores

// Start quiz over

// Functions & event listeners
$(document).ready(function () {
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
    })

    // Cycle through questions - click answers, send to next question, deduct 10 seconds from time if wrong

    nextQuestion();

    function nextQuestion() {
        $(".btn-block").on("click", function () {
            currentQuestion++;
            quesPrompt.textContent = questions[currentQuestion].question;
            answer1.textContent = questions[currentQuestion].choices[0];
            answer2.textContent = questions[currentQuestion].choices[1];
            answer3.textContent = questions[currentQuestion].choices[2];
            answer4.textContent = questions[currentQuestion].choices[3];

            if(currentQuestion>)
        })
    }
    // Log correct/incorrect answers

    // Final score

    // Store high scores
})