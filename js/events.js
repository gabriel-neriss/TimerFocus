import {

  buttonForest, 
  buttonRain ,
  buttonCoffeShop, 
  buttonFireplace, 
  body,
  iconLightMode,
  iconDarkMode,
  audioForest,
  audioRain,
  audioCoffeShop, 
  audioFireplace
 

} from './index.js'




// Events cardSons 

buttonForest.addEventListener ('click', function () {

  forest.classList.toggle ('blue')
 
  rain.classList.remove ('blue')
  coffeShop.classList.remove ('blue')
  fireplace.classList.remove ('blue')

   // audios button cardSons 

    audioForest.play()
    audioRain.pause()
    audioCoffeShop.pause()
    audioFireplace.pause()

    
}) 

buttonRain.addEventListener ('click', function () {

  rain.classList.toggle ('blue')

  forest.classList.remove ('blue')
  coffeShop.classList.remove ('blue')
  fireplace.classList.remove ('blue')
  

   // audios button cardSons

  audioRain.play()
  audioForest.pause()
  audioCoffeShop.pause()
  audioFireplace.pause()


})   

buttonCoffeShop.addEventListener ('click', function () {


  coffeShop.classList.toggle ('blue')

  forest.classList.remove ('blue')
  rain.classList.remove ('blue')
  fireplace.classList.remove ('blue')
  


  // audios button cardSons

  audioCoffeShop.play()
  audioForest.pause()
  audioRain.pause()
  audioFireplace.pause()

}) 

buttonFireplace.addEventListener ('click', function (){

  fireplace.classList.toggle ('blue')

  forest.classList.remove ('blue')
  rain.classList.remove ('blue')
  coffeShop.classList.remove ('blue')

  

   // audios button cardSons

  audioFireplace.play()
  audioForest.pause()
  audioRain.pause()
  audioCoffeShop.pause()


}) 



// eventos Dark Mode 


iconDarkMode.addEventListener('click', function () {

  body.classList.toggle ('dark')
  lightMode.classList.toggle ('dark')
  timer.classList.toggle ('dark')
  controlsTimer.classList.toggle ('dark')
  cardSons.classList.toggle ('dark') 

})


iconLightMode.addEventListener ('click' , function () {

  iconDarkMode.style.display = 'none'

} )