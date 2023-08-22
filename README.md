# CardGame2

Memeory Card Game

ArrayList<Cards> card(52)
Internal memory of cards to be used.

Card info: 
Value: (2-10,J,Q,K,A)
Suit: (Heart, Diamond, Spade, Club)

Game Stats:
Time: timer while playing a game. Game ends when timer stops at 0.
Sets: Number of sets collected.
Ids: Array of card id numbers for cards being used in game.
Options will have a choice for different design patterns for the backs of the cards. 3 patterns to start with, more will come later. 

Game play: 
  3 rows of 4 flip-cards (12)
  Back side (pic) card design pattern
  Face side (pic) card value & suit
  Start Game will be first screen. With an options icon to change the cards back pattern.
  When start game is pressed the cards are setup and the timer will start. 
  Only 2 cards can be chosen at a time. 
  If the two chosen cards match, the chosen cards will freeze in position showing the matched cards. 
  If all cards are matched before the timer runs out Victory will display, click again to reset game.

Choose cards:
  An Array list of 52 cards will be stored in the internal memory or the game. 
  At beginning of game the value for IDS will be an empty Array. 
  6 cards are chosen from the internal memory list to be used in game. 
  Each card selected is saved into IDS, and will create an exact pair in the game.
  Next the Cards are shuffled. 
  Each pair found while playing game is saved into Cards used.
  If a set is not found in a game, that value will not be saved to Cards used. 
  After set is played, Cards selected is set to empty. Cards used is saved for next game. 
  After each game Cards used will be checked if 48 cards are in the array. When 48 cards are in the Cards used Array, game is reset to original settings. 
  Game begins again.

