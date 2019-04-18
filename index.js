var inquirer = require('inquirer');
var Word = require('./word');
var wordDisplay = "";
var wordsAvalible = ["fame", "satellite of love", "reble reble", "space oddity", "life on mars", "moonage daydream", "five years", "suffragette city", "aladdin sane", "queen bitch", "modern love", "golden years", "station to station", "panic in detroit", "whatch that man", "diamond dogs", "lady stardust", "the man who sold the world"]
var randomWord = ""
var lettersGuessed = []
count = 0;
var word;
function pickRandomWord() {
    randomWord = wordsAvalible[Math.floor(Math.random() * wordsAvalible.length)];
    console.log(randomWord)
    lettersOfWord = Array.from(randomWord)
    console.log(lettersOfWord)
    console.log("hi")
    word = new Word(lettersOfWord);
    word.wordString();
}




var getLetter = function () {

    if (count < 3) {

        
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter!"
            }
        ]).then(function (answers) {
            
            // var letterChosen = new Letter(answers.letter, false, false);
            var letterChosen = answers.letter;
            lettersGuessed.push(letterChosen)
            console.log("You chose " + letterChosen);
            word.guessLetter(letterChosen)
            word.wordString(letterChosen)
            console.log(lettersGuessed)
            getLetter();
            count++;
            
        });
    }
    
}

function startGame() {
    pickRandomWord();
    getLetter();
}
startGame();



// var word1 = new Word(lettersOfWord);

// console.log(letterC)
// console.log(word1)
// word1.wordString();
