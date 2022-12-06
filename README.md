# Rock, Paper, Scissors 

This Rock, Paper, Scissors game is for people of all ages to enjoy. Challenge yourself against the computer programme 
to see who comes out on top.

![website displayed in different screens]()

## Features

* Heading 

    * The heading area contains the title of the page, Rock, Paper, Scissors. 
    * This section also contains text to let the player know the game is the first player to 
    reach 5 points wins.
    * The text in this area changes after picking an option, depending on the outcome
    of the game the text displayed will change.
    * Once someone reaches 5 points the game is over and the message changes for a final time,
    if the player has won the message displayed will congratulate them. If the player has lost the 
    message displayed will say "Better luck next time!". 
    * In both instances the player is told to click the refresh button if they wish to play again.

![heading of the website]()

* Display Images

    * The left hand side (the top image if on mobile) of this section initially contains an image of
    the players options. Once the player has picked an option the image changes to whatever the player picked.
    * The right hand side (the bottom image if on mobile) of this section initially contains an image of the
    computers options then depending on what the programme generates the image will change to an image of 
    that option.

![display images]()

* Players Buttons 

    * This section contains the refresh button which will refresh the entire page.
    * It also contains the buttons which are used to play the game. These buttons are
    rock, paper and scissors. Each button contains an image of these options.
    * The final button is the rules button. Once clicked this will display the rules of the game to
    the player.

![refresh button]() ![game choice and rules buttons]()

* Score Counter

    * This section contains the counters for both the player and the computer.
    * If the player wins the round a tally is added to their counter.
    * If the computer wins the round a tally is added to its counter. 
    * Once either of the players reach 5 on the counter the game is over.

![player score counter]() ![computer score counter]()

## Testing

* The website has been tested on several different browsers: Chrome, Firefox and Safari.

* The website is fully responsive and works on different screen sizes.

* The layout of the website make is very simple and makes it easy for new users to play.

* The rules button is always on the on all screen sizes, making the rules easily accessible 
for new users. 

### Bugs 

#### Solved Bugs

* The initial code for the "checkwinner" function within the javascript didn't work how I had 
intended. The code would only push certain messages, this was due to me inserting 2 equals signs
to display a message when I should have only been using 1.

#### Unfixed Bugs 

* No unfixed bugs.

### Validator Testing 

* HTML
    * There were no errors when checked through the official W3C validator.

* CSS
    * There were no errors when checked through the official W3C CSS validator (Jigsaw).

* JavaScript
    * There were no significant erros when checked through JSHint.

* Accessiblility
    * I ran the website through the lighthouse programme to make sure it is easily readable 
    with the colours and fonts used.

## Deployment 

* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * From the projects repository go to the settings tab.
    * Navigate to the pages tab, from the source drop-down menu choose deploy from a branch.
    * In the branch section there is another drop-down menu to select a branch, click this and select main.
    * Click the save button within the branch section and the website is now deployed. A link to the website
    is given at the top of the page.

## Credits

### Content

* The JavaScript code for both the "playerScore" and "computerScore" functions were inspired by the 
the Code Insitute's Love Maths increment score function.

### Media

* The background image used is taken from Vecteezy.
* The image of all three options, rock, paper and scissors, is taken from iStock.
* The seperate images of the options, rock, paper and scissors, are all taken from The Boston Globe.