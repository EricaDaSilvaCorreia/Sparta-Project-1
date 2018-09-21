# Sparta-Project-1
**By : Erica P da Silva Correia**

####Work description :

Create a game using the skills you've learned so far.

For my game, I decided to recreate a 5x5 version of the dots and boxes. 
Dots and boxes is a two player game in which each player take turns drawing lines between the dots on the game board either horizontally or vertically. The player who draws the last line on a 1x1 box wins the box and thus also earns a point. This continues until the whole grid is full, in this case all 25 boxes are taken, and no more lines can be drawn. The player with the most boxes at the end of the game wins.


####Tech Used :
**JavaScript, HTML DOM, CSS**

-----
#####how to download :


1. go to the github page [**https://github.com/EricaDaSilvaCorreia**](https://github.com/EricaDaSilvaCorreia)
2. Click repositories and select the repository [**Sparta-Project-1**](https://github.com/EricaDaSilvaCorreia/Sparta-Project-1)
3. Click 'Clone or Download'
4. Choose between **Open in Desktop**, **Download ZIP**, **Clone with SSH**, **Clone with HTTPs**

-----

#####Link to live page :

--------


#####Challenges :

The main issues I had with this project was with the functionality of the game: the boxes and getting them to register that all adjacent lines had been clicked. 
Tried different methods, nothing's stuck so far. one of them came pretty close but it was targeted at a specific box and because of the loops I used it would just keep searching when I used console.log().

After not getting the desired results with the loops I decided to target the boxes individually with if statements which worked. The issue that came with that was that the boxes only adopted the playerX class. I solved it by instead of having the player indicator be the deciding factor, to make an array into which the line class would be pushed everytime a player clicked and also be cleared after everyturn. then by adding an attribute to the boxes when they are first created and setting this from false to true everytime a box was taken the box would adopt the correct class and not change at every click.

next issue was the repeating of the player turn. as mentioned above in the description: whenever a box is taken, the player who took the box gets another turn which I wil leave for the next sprint. But this is what I had for that.


~~~javascript
  game.moveAgain = () => {
    if (game.boxesTaken[game.boxesTaken.length -1] === "box playerX") {
      game.turn = true;
    }else if (game.boxesTaken[game.boxesTaken.length -1] === "box playerY") {
      game.turn = false;
    }
  }

~~~

I've basically now put everything on a single page and will expand on it later on.

-----

#####Take-Aways :

So far I'm enjoying the challenge. It can be quite frustrating at times but it wouldn't be a challenge if it wasn't, smooth seas don't make good sailors. It's also highlighted some issues I should work on improving moving forward. There were  many times I felt like giving up on it and switching games but I stuck with it and I'm pretty proud of that. I feel like the game expanded my knowledge and I'm pretty happy about my progress. 

I give it a 11/10 on the difficulty skill and I'll give myself a 7/10.

-----

