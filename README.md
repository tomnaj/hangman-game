---

# Hangman Game 🎮  

A simple and interactive Hangman Game built using HTML, CSS, and JavaScript. The game allows users to guess letters in a hidden word within a specific category.  

## Features ✨  
- Randomized words from different categories.  
- Track wrong guesses with a limit of 6 attempts.  
- Visual feedback for correct and incorrect guesses.  
- Reset button to start a new game.  
- Clean and responsive UI.  

## Demo 📸  
Include a screenshot or GIF of your game in action!  

## Getting Started 🚀  

### Prerequisites  
Ensure you have the following installed on your system:  
- A modern web browser.  

### Installation  
1. Clone this repository:  
   ```bash  
   git clone https://github.com/tomnaj/hangman-game.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd hangman-game  
   ```  
3. Open `index.html` in your browser to start playing.  

### File Structure  
```plaintext  
hangman-game/  
│  
├── index.html          # Main HTML file.  
├── style.css           # Styling for the game.  
├── script.js           # Game logic.  
└── words.js            # Word categories and word list.  
```  

### How to Play 🕹️  
1. Launch the game by opening `index.html`.  
2. A random word from a selected category will be hidden.  
3. Click on the letter buttons to guess the word.  
4. You have up to 6 wrong guesses before the game ends.  
5. Click the "Reset Game" button to start over.  

## Customization 🛠️  
- Add more words and categories in the `words.js` file:  
  ```javascript  
  export const categories = {  
      animals: ["cat", "dog", "elephant"],  
      countries: ["france", "germany", "brazil"],  
      // Add your categories and words here!  
  };  
  ```  

## Technologies Used 💻  
- **HTML**: For structuring the game layout.  
- **CSS**: For styling the game interface.  
- **JavaScript**: For game logic and interactivity.


## License 📜  
This project is licensed under the MIT License.  


---
