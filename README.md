# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Danica Therese Moscoso Padlan

Time spent: **5** hours spent in total

*Note: The hours that are seen on Glitch are inaccurate due to leaving my project tab open for long periods of time

Link to project: https://glitch.com/edit/#!/dp-light-memory-game?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Plays Clues in Normal Speed
![](https://i.imgur.com/RTywtxw.gif)

Plays Clues in Faster Speed
![](https://i.imgur.com/3r0vkqA.gif)

Start and Stop Button 
![](https://i.imgur.com/y6LpG7Y.gif)

Losing Lives to Repeat Pattern
![](https://i.imgur.com/OkJ0cRL.gif)

Running Out Of Time
![](https://i.imgur.com/oIXb5i3.gif)

Random Pattern 2
![](https://i.imgur.com/4q9KhCA.gif)

Random Pattern 3
![](https://i.imgur.com/Dju9bsD.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://www.w3schools.com/jsref/met_win_clearinterval.asp
https://www.w3schools.com/jsref/met_win_settimeout.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I faced during this project was implementing the timer feature to limit the time the player has to play the right pattern. 
It was my first time using setInterval and clearInterval on my own so I had to look at an online documentation page and some example 
code on how to use it. At first, I didn't really understand how to work around controlling the timer when the secret pattern would play
and knowing when to stop the time. Then I was able to get the hang of it more by identifying when the player should start guessing and what
scenarios would affect the timer. I started the time after looping through the secret pattern and then stopped it when the player played the right
pattern when the player would play the wrong pattern and decrement their number of guesses, when time ran out, and when the player won or lose the game.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Some of the questions I have for web development is how do developers incorporate other outside applications or databases into their websites?
I am more curious about how and where a website would store user data. For example, where do we track a user's input from an online form, 
how do we track what username and password are valid, and how do we incorporate other applications on a website like Google Maps or an updating demographic pie chart?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Unfortunately, I did not have time to implement all the features I wanted due to school work but I had some ideas that I wanted to implement.
I would like to spend time implementing more game features like adding different game modes (easy, medium, hard), using sound files for the buttons' sound, tinkering with CSS by making buttons out of images, having animations for the body of the website to flash white when a button was pressed,
and creating multiple HTML pages for an opening title page and a winner or loser page instead of using alerts.
One feature I would like to improve on is the timer. There is a delay between updating the variable that stores the value of time and the text of the time on the game. 
So far on the page, the time runs out when it is 1 second left even though the variable of the time is 0. I would like to figure out how to synchronize between updating the time and updating the text on the page.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/6Nrj33bnRys)


## License

    Copyright Danica Padlan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.