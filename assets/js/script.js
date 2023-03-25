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