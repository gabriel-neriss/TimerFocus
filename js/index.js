import {} from './controls.js'
import {} from './events.js'
import {} from './timer.js'


const body = document.querySelector ('body')

const iconLightMode = document.querySelector ('#lightMode')
const iconDarkMode = document.querySelector ('#darkMode')


const buttonPlay = document.querySelector ('.play')
const buttonStop = document.querySelector ('.stop')
const buttonMostaddTimer = document.querySelector ('.addTimer')
const buttonDecreaseTimer = document.querySelector ('.decreaseTimer')

const buttonForest = document.querySelector ('#forest')
const buttonRain = document.querySelector ('#rain')
const buttonCoffeShop = document.querySelector ('#coffeShop')
const buttonFireplace = document.querySelector ('#fireplace')
const cardSons = document.querySelector ('.cardSons')


const volForest = document.querySelector('#volForest')
const volRain = document.querySelector ('#volRain')
const volCoffeShop = document.querySelector('#volCoffeShop')
const volFireplace = document.querySelector('#volFireplace')


let stopTimer
let minutes
const minutesDisplay = document.querySelector ('.minutes')
const secondsDisplay = document.querySelector ('.seconds')


// sounds buttom 

const audioForest = new Audio ("sons/florest.wav")
const audioRain = new Audio ("sons/rain.wav")
const audioCoffeShop = new Audio ("sons/coffeshop.wav")
const audioFireplace = new Audio ("sons/fireplace.wav")
const pressButton = new Audio ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

audioForest.loop = true
audioRain.loop = true
audioCoffeShop.loop = true
audioFireplace.loop = true


export {

  body,
  iconLightMode,
  iconDarkMode,
  buttonPlay, 
  buttonStop, 
  buttonMostaddTimer,
  buttonDecreaseTimer,
  buttonForest, 
  buttonRain ,
  buttonCoffeShop, 
  buttonFireplace, 
  cardSons,
  volForest,
  volRain, 
  volCoffeShop,
  volFireplace,
  stopTimer,
  minutes,
  minutesDisplay,
  secondsDisplay, 
  
  /* audios */

  audioForest,
  audioRain,
  audioCoffeShop, 
  audioFireplace,
  pressButton,
   



}