var Letter = require("./letter");
var mappedLetters;

var Word = function (lettersOfWord) {
    this.wordDisplay = "";
    this.wordFinished = false;
    this.lettersOfWord = [];
    this.lettersInWord = 0;

    // A function that returns a string representing the word. 
    this.wordString = function (letter, guessed) {
        // makes all lettersOfWord into letter objects set to mappedLetters
        mappedLetters = lettersOfWord.map(function (lett) {
            var itemLetter = new Letter(lett, false, false)
            return itemLetter
        })

        // goes through each of the words letter objects
        for (var i = 0; i < mappedLetters.length; i++) {

            // runs guessLetter function on each letter
            this.guessLetter(letter, guessed)

            // checks for space in word- updates space var to true 
            if (mappedLetters[i].underLyingCharacter === " ") {
                mappedLetters[i].space = true;

            } else {
                mappedLetters[i].space = false;
            }
            // sets word display to concatenate lettersobjects that have run the letterOrUnderscore function from letters.js
            this.wordDisplay = this.wordDisplay + mappedLetters[i].letterOrUnderscore(false, false);
        }
        // log updated word with underscores
        console.log("\n" + this.wordDisplay + "\n")

        // checks to see if word is finished 
        if (!this.wordDisplay.includes("_")) {
            this.wordFinished = true;

        } else {
            this.wordFinished = false;

        }
        // clears word display to prevent concatenation of itself multiple times
        this.wordDisplay = "";
    }



    // A function that takes a the letter guessed and the array of previous letters guessed as arguments
    this.guessLetter = function (letter, guessed) {


        for (var j = 0; j < mappedLetters.length; j++) {
            // calls the underLyingCharcterMatch function on each letter object- 
            // to update the wordDispaly to include all correct letters guessed
            this.WordDisplay = mappedLetters[j].underLyingCharacterMatch(letter, guessed);

        }


    }

}




module.exports = Word;


