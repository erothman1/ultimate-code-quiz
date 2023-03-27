//Array that contains questions, wrong answers, and right answer
var questionsAnswers = [
    {
        question: "Question 1: What are reusable blocks of code that perform a specific task?",
        answers: ["functions", "arguments", "if statements", "window"],
        wrongAnswers: ["arguments", "if statements", "window"],
        rightAnswer: "functions",
    },
    {
        question: "Question 2: What type of scope is available to all functions?",
        answers: ["local", "lexical", "global", "block"],
        wrongAnswers: ["local", "lexical", "block"],
        rightAnswer: "global",
    },
    {
        question: "Question 3: How do you log the head tag and all of its children?",
        answers: ["console.log(window)", "console.log(window.document)", "console.log(document.head)", "console.log(head)"],
        wrongAnswers: ["console.log(window)", "console.log(window.document)", "console.log(head)"],
        rightAnswer: "console.log(document.head)",
    },
    {
        question: "Question 4: How many parameters does the .setAttribute() method take?",
        answers: ["one", "two", "three", "four"],
        wrongAnswers: ["one", "three", "four"],
        rightAnswer: "two",
    },
    {
        question: "Question 5: What method do you use to remove the last element of an array?",
        answers: [".shift()", ".push()", ".pop()", ".remove()"],
        wrongAnswers: [".shift()", ".push()", ".remove()"],
        rightAnswer: ".pop()",
    }
]

// Create variable for start button
var startQuiz = document.getElementById("start")

//Create timer variable
var timer = document.getElementById("time")

//Create variable for starting page
var startPage = document.getElementById("start-page")

//Create variable for starting seconds left 
var secondsLeft = 75 

//Puts timer content on screen 
timer.textContent = secondsLeft

//Create variable for quiz container
var container = document.getElementById("quiz-container")

//Create variable for id carouselbox
var carousel = document.getElementById("carouselbox")

//Create variable for question
var questionPage = document.querySelector(".question")

//Create variable for answers
var answersPage = document.querySelector(".answers")

//Create variable for button elements
var nextOne = document.getElementById("next-one")
var nextTwo = document.getElementById("next-two")
var nextThree = document.getElementById("next-three")
var nextFour = document.getElementById("next-four")

//variable for all buttons
var button = document.querySelector(".button")

//setInterval function that holds countdown
function setTime() {

    //Hides start page 
    startPage.setAttribute("style", "display: none")

    //Sets interval
    var timerInterval = setInterval(function() {
        secondsLeft --
        timer.textContent = secondsLeft

        if (secondsLeft === 0 || index >= questionsAnswers.length){
            //Stops execution of action at set interval
            timer.textContent = "Game over!!"
            clearInterval(timerInterval)
            finishedQuiz()   
        }

    }, 1000)

    //Shows quiz page
    quiz(index)
    
}

//Listen for click event on start button
//Clicking start button will initiate the countdown, hide start page, and take user to quiz page one 
startQuiz.addEventListener("click", setTime)

//Function navigates through quiz pages 
var index = 0

function quiz(index) {
    container.setAttribute("style", "display: block")

    for (var i = 0; i < questionsAnswers.length; i ++) {
        questionPage.textContent = questionsAnswers[index].question

        nextOne.textContent = questionsAnswers[index].answers[0]
        nextTwo.textContent = questionsAnswers[index].answers[1]
        nextThree.textContent = questionsAnswers[index].answers[2]
        nextFour.textContent = questionsAnswers[index].answers[3]
    }

    //Listens for click event on each button to compare answers
    nextOne.addEventListener("click", compareAnswers)
    nextTwo.addEventListener("click", compareAnswers)
    nextThree.addEventListener("click", compareAnswers)
    nextFour.addEventListener("click", compareAnswers)
}

//Function to compare answer choices
var h3 = document.querySelector(".right-wrong")

function compareAnswers(event) {

    var element = event.target

    if (element.textContent == questionsAnswers[index].rightAnswer) {
        h3.textContent = "Good job! Correct!"
    } else {
        h3.textContent = "Wrong! Minus 5 on the clock!"
        secondsLeft -= 5
    }

    index ++

    if (index < questionsAnswers.length){
        quiz(index)
    } else {
        finishedQuiz()
    }
}

var allDone = document.getElementById("all-done")

var finalScore = document.getElementById("final-score")

var submitButton = document.getElementById("submit")

function finishedQuiz() {
    container.setAttribute("style", "display: none")
    allDone.setAttribute("style", "display: block")

    finalScore.textContent = "Your final score is " + secondsLeft

    submitButton.addEventListener("click", memoryStorage)

}

var leaderBoard = document.getElementById("leader-board")

function memoryStorage(event) {

    allDone.setAttribute("style", "display: none")

    leaderBoard.setAttribute("style", "display: block")

    event.preventDefault()
}










