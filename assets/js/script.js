// Create variable for start button
var startQuiz = document.getElementById("start")

//Create timer variable
var timer = document.getElementById("time")

//Create variable for starting seconds left 
var secondsLeft = 75 

timer.textContent = secondsLeft

//setInterval function that holds countdown
function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft --
        timer.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }

    }, 1000)
}
//Listen for click event on start button
//Clicking start button will initiate the countdown and take user to quiz page one 
startQuiz.addEventListener("click", setTime)