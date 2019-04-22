var inquirer = require('inquirer');
var Word = require('./word');
var wordsAvalible = ["Fame", "Satellite of Love", "Reble Reble", "Space Oddity", "Life on Mars", "Moonage Daydream", "Five Years", "Suffragette City", "Aladdin Sane", "Queen Bitch", "Modern Love", "Golden Years", "Station to Station", "Panic in Detroit", "Whatch That Man", "Diamond Dogs", "Lady Stardust", "The Man Who Sold the World"]
var randomWord = ""
var lettersGuessed = []
var word;
var points = 10;


// make function to pick random word from wordsAvailable- make array
function pickRandomWord() {
    randomWord = wordsAvalible[Math.floor(Math.random() * wordsAvalible.length)];
    lettersOfWord = Array.from(randomWord.toLocaleLowerCase());
    word = new Word(lettersOfWord);
    // run wordStrin on word object to print out word blanks
    word.wordString();
}

// function that runs inquirer to get letter input and has logic for game
var getLetter = function () {

    // function to valadate that a letter is chosen
    function validateLetter(letter){
        var reg = /^[a-z]+$/;
        return reg.test(letter) || "Please choose a valid letter!";;
    }

        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter!",
                validate: validateLetter
               
            }
        ]).then(function (answers) {
            // variable that stores current letter guessed
            var letterChosen = answers.letter.toLowerCase();
            // variable that stores array of letters that have been guessed this round
            lettersGuessed.push(letterChosen);
            
            // runs word.js programs passing letterChosen and lettersGuessed
            word.guessLetter(letterChosen, lettersGuessed);
            word.wordString(letterChosen, lettersGuessed);

            // logic for game
            if (lettersOfWord.includes(letterChosen)) {
              console.log("\x1b[36m%s\x1b[0m", "CORRECT!!\n")
            } else {
                points--;
                console.log("\x1b[31m%s\x1b[0m", "INCORRECT You have " + points + " guesses left!\n")
                if (points === 0) {
                    // if you run out of points word is displayed and you are asked if you want to play again
                    console.log("\x1b[31m%s\x1b[0m", "Out of guesses! The song name was " + randomWord + ".\n")
                    inquirer.prompt([
                        {
                            name: "playAgain",
                            message: "Do you want to play again?",
                            type: "confrim",
                            default: true
                        }
                    ]).then(function (answers) {
                        if (answers.playAgain === true) {
                            startGame();
                        }
                    });
                }
            
            }
            // if word is not solved and points are not 0 you are prompted for a letter agian 
            if (word.wordFinished === false && points > 0) {
                getLetter();
                // if word is solved - congrats message and start game for next word
            } else  if (word.wordFinished === true) {
                console.log("\x1b[36m%s\x1b[0m", "CONGRATS! You got it! Next Word! \n");
                startGame();
            }
            
           
            
        });
    
    
}

// function that starts the game
function startGame() {
    points = 10;
    lettersGuessed = [];
    console.log("\nGUESS THE DAVID BOWIE SONG TITLE! \n")
    pickRandomWord();
    getLetter();
}

startGame();




