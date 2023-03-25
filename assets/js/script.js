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
console.log(questionsAnswers[0].question)

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


}
//Listen for click event on start button
//Clicking start button will initiate the countdown, hide start page, and take user to quiz page one 
startQuiz.addEventListener("click", setTime)