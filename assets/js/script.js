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
var nextOne = document.querySelector(".next-one")
var nextTwo = document.querySelector(".next-two")
var nextThree = document.querySelector(".next-three")
var nextFour = document.querySelector(".next-four")

//Create variable for choice one button
var choiceOne = document.getElementById("choice-one")

//Create variable for choice two button
var choiceTwo = document.getElementById("choice-two")

//Create variable for choice three button
var choiceThree = document.getElementById("choice-three")

//Create variable for choice four button
var choiceFour = document.getElementById("choice-four")

//Function shows first quiz page
var index = 0
function quiz() {
    container.setAttribute("style", "display: block")

    questionPage.textContent = questionsAnswers[index].question
    choiceOne.textContent = questionsAnswers[index].answers[0]
    choiceTwo.textContent = questionsAnswers[index].answers[1]
    choiceThree.textContent = questionsAnswers[index].answers[2]
    choiceFour.textContent = questionsAnswers[index].answers[3]
}

//Function to get next question
function nextQuestion() {
    index++
    questionPage.textContent = questionsAnswers[index].question
    choiceOne.textContent = questionsAnswers[index].answers[0]
    choiceTwo.textContent = questionsAnswers[index].answers[1]
    choiceThree.textContent = questionsAnswers[index].answers[2]
    choiceFour.textContent = questionsAnswers[index].answers[3]
}

//Click events on answer buttons will call nextQuestion function
nextOne.addEventListener("click", nextQuestion)
nextTwo.addEventListener("click", nextQuestion)
nextThree.addEventListener("click", nextQuestion)
nextFour.addEventListener("click", nextQuestion)




//setInterval function that holds countdown
function setTime() {

    //Hides start page 
    startPage.setAttribute("style", "display: none")

    //Sets interval
    var timerInterval = setInterval(function() {
        secondsLeft --
        timer.textContent = secondsLeft

        if (secondsLeft === 0) {
            //Stops execution of action at set interval
            clearInterval(timerInterval)
            
        }

    }, 1000)

    //Shows quiz page
    quiz()
    
}

//Listen for click event on start button
//Clicking start button will initiate the countdown, hide start page, and take user to quiz page one 
startQuiz.addEventListener("click", setTime)