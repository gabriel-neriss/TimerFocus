import {

  buttonPlay, 
  buttonStop, 
  buttonMostaddTimer,
  buttonDecreaseTimer,
  pressButton

} from './index.js'



import {

  updateTimerDisplay,
  timerMinutes,
  addMinutes,
  decreaseTimer,
  stopTimer
  

} from './timer.js'





// Eventos controls timer 

export function initControls () {


  buttonPlay.addEventListener ('click', function () {

    timerMinutes ()
    buttonStop.style.display = 'block'
    buttonPlay.style.display = 'none'
    pressButton.play()
    
    
    })
    
    
    buttonStop.addEventListener('click', function() {
    
    clearTimeout(stopTimer)
    buttonStop.style.display = 'none'
    buttonPlay.style.display = 'block'
    pressButton.play()
    
    
    })
    
    buttonMostaddTimer.addEventListener ('click', function () {
    
    addMinutes()
    updateTimerDisplay (minutes, 0)
    pressButton.play()
    
    })
    
    buttonDecreaseTimer .addEventListener ('click', function () {
    
    decreaseTimer ()
    updateTimerDisplay (minutes, 0)
    pressButton.play()
    
    
    })


}
