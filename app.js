//document.getElementById("count-el").innerText = 7

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 32

// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let count = 5

// // count + 1

// count = count + 5

// count = count + 10

// count = count - 5

// console.log(count)

// let bounsPoints = 50
// console.log(bounsPoints)

// bounsPoints = bounsPoints + 50
// console.log(bounsPoints)

// bounsPoints = bounsPoints - 75
// console.log(bounsPoints)

// bounsPoints = bounsPoints + 45

// console.log(bounsPoints)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// first race
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// second race
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// // first race
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// // second race
// countdown()

// function number42() {
//     console.log(42)
// }

// number42()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapsum() {
//     // let totalTime = lap1 + lap2 + lap3
//     // console.log(totalTime)
//     console.log(lap1 + lap2 + lap3)
// }

// lapsum()

// let lapsCompleted = 0

// function incrementLap() {
//    lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

let countEl = document.getElementById('count-el');

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

let saveEl = document.getElementById('save-el');

function save() {
  let countStr = ' ' + count + ' / ';
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function decrement() {
  count -= 1;
  countEl.textContent = count;
}

// changed the count "-" to "/"

// let username = "ADaM"
// let message = "you have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let myName = "ADaM"
// let greeting = "Hi, My name is "
// let myGreeting = greeting + myName

// console.log(myGreeting)

// let myName = 42
// let greeting = "Hi, My name is "
// let myGreeting = greeting + myName

// console.log(myGreeting)

// let points = 4
// let bounsPoints = "10" // between numbers and string, strings always win

// let totalPoints = points + bounsPoints

// console.log(totalPoints)

// let welcomeEl = document.getElementById("welcome-el")
// console.log(welcomeEl)

// let userName = "ADaM Alamin"
// let greeting = "Welcome Back "

// welcomeEl.innerText = greeting + userName

// welcomeEl.innerText += ":)"
