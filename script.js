let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");

let guess = document.querySelector(".guess");
let message = document.querySelector(".message");
let correctNumber = document.querySelector(".number");
let score = document.querySelector(".score")
let highScore = document.querySelector(".highscore")


let point = 10;
let highPoint = 0;


let secretNumber = Math.floor(Math.random() * 50) + 1;

checkBtn.onclick = () => {
    if (point > 0) {
        if (guess.value > 0 && guess.value <= 50) {

            if (guess.value < secretNumber) {
                point--;
                message.innerHTML = "It is low";
                guess.value = "";
                guess.focus();

            } else if (guess.value > secretNumber) {
                point--;
                message.innerHTML = "It is high";
                guess.value = "";
                guess.focus();


            } else {
                message.innerHTML = "You win!";
                correctNumber.textContent = secretNumber;
           

                if (highPoint < point) {
                    highPoint = point;

                }

            }
            highScore.innerHTML = highPoint;
            score.innerHTML = point;
            if (point === 0) {
                message.innerHTML = "You are looser!";


            }
        } else {
            alert("Please enter a number between 1 and 50")
        }


    }

}

againBtn.addEventListener("click", function () {
    guess.value = "";
    point = 10;
    score.innerHTML = point;
    message.innerHTML = "Start guessing...";
    secretNumber = Math.floor(Math.random() * 50) + 1;
    correctNumber.textContent = "?";
    console.log(click())




})














// function func1() {
//     return Math.ceil(Math.random() * 50)
// }
// let sayi = func1()
// let checkButton = document.getElementById("check")
// let input = document.getElementById("input")
// let message = document.querySelector(".message")
// let secretNumber = document.querySelector(".number")
// let score = document.querySelector(".score")
// let again = document.querySelector(".again")
// let point = 10
// let highScore = 0
// let highClass = document.querySelector(".highscore")
// checkButton.onclick = () => {
//     if ((input.value > 50 || input.value < 1)) {
//         message.innerHTML = "Alert! Please write a number between 0 and 50"
//     }
//     else if (point === 0) {
//         message.innerHTML = "You are a Loser"
//     }
//     else {
//         if (input.value > sayi) {
//             message.innerHTML = "Aşağı"
//             document.body.style.backgroundColor = "blue"
//             point--
//         }
//         else if (input.value < sayi) {
//             message.innerHTML = "Yukarı"
//             document.body.style.backgroundColor = "red"
//             point--
//         }
//         else {
//             message.innerHTML = "Kazandınız"
//             secretNumber.innerHTML = sayi
//             document.body.style.backgroundColor = "green"
//             if (highScore < point) {
//                 highScore = point
//             }
//         }
//         input.value = ""
//         input.focus()
//     }
//     score.innerHTML = point
//     highClass.innerHTML = highScore
//     if (point === 0) {
//         message.innerHTML = "You are a Loser"
//     }
// }
// again.onclick = () => {
//     sayi = func1()
//     message.innerHTML = "Start guessing..."
//     document.body.style.backgroundColor = "black"
//     secretNumber.innerHTML = "?"
//     point = 10
//     score.innerHTML = point
//     input.value = ""
//     function func1() {
//         return Math.ceil(Math.random() * 50)
//     }
//     let sayi = func1()
//     let checkButton = document.getElementById("check")
//     let input = document.getElementById("input")
//     let message = document.querySelector(".message")
//     let secretNumber = document.querySelector(".number")
//     let score = document.querySelector(".score")
//     let again = document.querySelector(".again")
//     let point = 10
//     let highScore = 0
//     let highClass = document.querySelector(".highscore")
//     checkButton.onclick = () => {
//         if ((input.value > 50 || input.value < 1)) {
//             message.innerHTML = "Alert! Please write a number between 0 and 50"
//         }
//         else if (point === 0) {
//             message.innerHTML = "You are a Loser"
//         }
//         else {
//             if (input.value > sayi) {
//                 message.innerHTML = "Aşağı"
//                 document.body.style.backgroundColor = "blue"
//                 point--
//             }
//             else if (input.value < sayi) {
//                 message.innerHTML = "Yukarı"
//                 document.body.style.backgroundColor = "red"
//                 point--
//             }
//             else {
//                 message.innerHTML = "Kazandınız"
//                 secretNumber.innerHTML = sayi
//                 document.body.style.backgroundColor = "green"
//                 if (highScore < point) {
//                     highScore = point
//                 }
//             }
//             input.value = ""
//             input.focus()
//         }
//         score.innerHTML = point
//         highClass.innerHTML = highScore
//         if (point === 0) {
//             message.innerHTML = "You are a Loser"
//         }
//     }
//     again.onclick = () => {
//         sayi = func1()
//         message.innerHTML = "Start guessing..."
//         document.body.style.backgroundColor = "black"
//         secretNumber.innerHTML = "?"
//         point = 10
//         score.innerHTML = point
//         input.value = ""
//     }
// }