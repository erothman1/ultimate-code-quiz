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

//Create variable for button elements
var nextOne = document.getElementById("next-one")
var nextTwo = document.getElementById("next-two")
var nextThree = document.getElementById("next-three")
var nextFour = document.getElementById("next-four")

//Create variable for h3 statement on quiz page
var h3 = document.querySelector(".right-wrong")

//Creates variable for finished quiz container
var allDone = document.getElementById("all-done-container")

//Creates variable for h2 where final score gets written
var finalScoreH2 = document.getElementById("final-score")

//Creates variable for submit button
var submitButton = document.getElementById("submit")

//Create variable for initials input variable 
var initialInput = document.getElementById("initials")

//Create variable for leaderboard page container 
var leaderBoardPage = document.getElementById("leader-board")

//Create variable for score count list 
var scoreCount = document.getElementById("score-count")

//Create variable for start over button
var startOverButton = document.getElementById("start-over")

//Create variable for clear storage button
var clearStorageButton = document.getElementById("clear")

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

    //For loop iterates through array holding questions and answers
    for (var i = 0; i < questionsAnswers.length; i ++) {
        questionPage.textContent = questionsAnswers[index].question

        nextOne.textContent = questionsAnswers[index].answers[0]
        nextTwo.textContent = questionsAnswers[index].answers[1]
        nextThree.textContent = questionsAnswers[index].answers[2]
        nextFour.textContent = questionsAnswers[index].answers[3]
    }

    //Listens for click event on each button to call compareAnswers function
    nextOne.addEventListener("click", compareAnswers)
    nextTwo.addEventListener("click", compareAnswers)
    nextThree.addEventListener("click", compareAnswers)
    nextFour.addEventListener("click", compareAnswers)
}

//Function to compare answer choices and navigate through the quiz
function compareAnswers(event) {

    //Creates variable for button that gets clicked
    var buttonClicked = event.target

    //If button clicked is the right answer, show correct statement; if not, dock 5 minutes on clock and show wrong statement
    if (buttonClicked.textContent == questionsAnswers[index].rightAnswer) {
        h3.textContent = "Good job! Correct!"
    } else {
        h3.textContent = "Wrong! Minus 5 on the clock!"
        secondsLeft -= 5
    }

    //Adds one to index
    index ++

    //If index is less than length of array with questions and answers, call quiz function again; if not, call finsihedQuiz function again
    if (index < questionsAnswers.length){
        quiz(index)
    } else {
        finishedQuiz()
    }
}

//Function to show final score and get input from user for the leaderboard
function finishedQuiz() {
    container.setAttribute("style", "display: none")
    allDone.setAttribute("style", "display: block")

    finalScoreH2.textContent = "Your final score is " + secondsLeft

    //Listens for submit event on submit button and calls leaderBoard function when clicked or enter key is hit 
    submitButton.addEventListener("click", leaderBoard)

}

//Function to show leaderboard page, add scores to local storage, and show past scores 
function leaderBoard(event) {

    event.preventDefault()

    allDone.setAttribute("style", "display: none")
    timer.setAttribute("style", "display: none")
    leaderBoardPage.setAttribute("style", "display: block")

    //Save score data as an object
    var userScore = {
        initials: initialInput.value.trim(),
        score: secondsLeft
    }

    console.log(userScore)

    //Create variable that has the stored user score items or is an empty array
    var storedScores = JSON.parse(localStorage.getItem("userScore")) || []

    //Adds current user sccore to stored scores variable 
    storedScores.push(userScore)

    //Iterates over stored scores and adds each one to list item on page
    for (var i = 0; i < storedScores.length; i++) {

        var li = document.createElement("li")
        li.textContent = "Initials: " + storedScores[i].initials + " Score: " + storedScores[i].score
        li.setAttribute("data-index", i)
        li.setAttribute("style", "list-style-type: none")

        scoreCount.appendChild(li)
    }

    //Store object in storage as a string 
    localStorage.setItem("userScore", JSON.stringify(storedScores))
}

//Listens for click on start over button
//FIX BUG IN START OVER / PLAY AGAIN
startOverButton.addEventListener("click", function() {

    index = 0

    leaderBoardPage.setAttribute("style", "display: none")

    startPage.setAttribute("style", "display: block")

    timer.setAttribute("style", "display: block")

    timer.textContent = 75
})

//Listens for click on clear storage button
clearStorageButton.addEventListener("click", function() {

    //Sets text content for list to an empty string
    scoreCount.textContent = ""

    //Clears local storage 
    localStorage.clear()
})





