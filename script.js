/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//global constant
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333;
const nextClueWaitTime = 1000; //og: 1000

//Global Variables
//og pattern: [2, 2, 4, 3, 2, 1, 2, 4] 
var pattern = [1, 1, 1, 1, 1, 1, 1, 1]; //array of 8 patterns
var progress = 0; //tracks the stage of the game
var gamePlaying = false;
var guessCounter = 0; //tracks what index/clue button the user is on
var guessLeft = 3; //tracks how many wrong guesses left til game over

//for the sounds
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 - 1.0
var reducedTime = 0;

//timer 
var curTime;
var resetTime = 10;
var timeID;
let stillPlayingClue = true;

//buttons
var curButton;

function startGame(){
  
  //initializing game variables
  progress = 0;
  guessCounter = 0;
  gamePlaying = true;
  guessLeft = 3;
  clueHoldTime = 1000;
  
  //swaps the start and swap buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //randomizes play pattern
  randomizePattern();
  
  resetTime = 10;
  curTime = resetTime;
  curButton = 0;
  
  //plays clues
  playClueSequence(); 
  
}

function randomizePattern(){
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = Math.ceil(Math.random() * 6); //changed from 4 to 6
  }
}

function stopGame(){
  
  gamePlaying = false;
  clearTime();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
}

function loseGame(){
  stopGame();

  if(guessLeft == 0){
    alert("You ran out of guesses. Game Over! You lost.");
  } else{
    alert("You ran out of time. Game Over! You lost.");
  }
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//counts down the time
function countTime(){
  document.getElementById("timer").classList.remove("hidden");
  document.getElementById("timer").innerHTML = curTime;
  
  if(curTime == 0 && stillPlayingClue == false){
    resetTime = 10;
    curTime = resetTime;
    clearInterval();
    loseGame();
  } else if(stillPlayingClue == false){
    curTime -= 1;
  }
}

function clearTime(){
  clearInterval(timeID);
}


function resumeTime(){
  stillPlayingClue = false;
}


//takes in integer and uses string concatenation to find the button names
function lightButton(btn){
  //document.getElementById("button"+btn).classList.add("lit");
  //new
  document.getElementById("button"+btn).classList.add("hidden");
  document.getElementById("button"+btn+"Rep").classList.remove("hidden");
}

function clearButton(btn){
  //document.getElementById("button"+btn).classList.remove("lit");
  //new
  document.getElementById("button"+btn).classList.remove("hidden");
  document.getElementById("button"+btn+"Rep").classList.add("hidden");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clearTime();
  stillPlayingClue = true;
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //sets initial delay
  
  //loops to play pattern
  for(let i=0; i<=progress; i++){ 
    console.log("playing index " + i + " with button " + pattern[i]);
    setTimeout(playSingleClue, delay, pattern[i]); //waits in between clue play time
    delay += clueHoldTime; //adds more time to delay
    delay += cluePauseTime;
  }
  
  
  setTimeout(resumeTime,delay); //delays timer til clue is finished
  
  //increase to reduce clueHoldTime
  timeID = setInterval(countTime, 1000);
  
}

function guess(btn){
  if(!gamePlaying){
    return;
  }

  //game logic: check for wins first then default to lose
  if(btn == pattern[guessCounter]){
    
    //if not at last progress index yet
    if(guessCounter != progress){
      guessCounter++;
      
    //if not the end of the game  
    } else if(progress != pattern.length-1){
      clearTime();
      curTime = resetTime;
      progress++;
      clueHoldTime -= 100;
      playClueSequence(); //play next sequence
      
    //else win game  
    } else{
      winGame();
    }
    
  } else{
    guessLeft -= 1; //tracks multiple guesses
    
    if(guessLeft == 0){
      clearTime(); //pauses timer
      loseGame();
    } else{
      clearTime(); //pauses timer
      alert("Wrong! You have " + guessLeft + " guesses left");
      playClueSequence(); //plays same sequence
    }
    
  }  
}

//copied and pasted from project
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.6,
  5: 500,
  6: 565
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)