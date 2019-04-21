var Letter = require("./letter");
var space = false;
var mappedLetters;
// var letterChosen = new Letter(answers.letter, false, false);


var Word = function (lettersOfWord) {
    this.wordDisplay = "";
    this.wordFinished = false;
    this.newWordDisplay = []
    this.lettersOfWord = [];
    this.lettersInWord = 0;
    // this.addLetters = function (underChar, guessed, spaces) {
    //     this.lettersOfWord.push(new Letter(underChar, guessed, spaces));
    //     // console.log("----- the updated array: "+this.letters)
    // }

    // A function that returns a string representing the word. This should call the function on each 
    // letter object (the first function defined in Letter.js) that displays the character or an
    //  underscore and concatenate those together.
    this.wordString = function (letter, guessed) {
        mappedLetters = lettersOfWord.map(function (item) {
            var itemLetter = new Letter(item, false, false)
            return itemLetter
        })

        for (var i = 0; i < mappedLetters.length; i++) {

            // var letterThing = new Letter();
            this.guessLetter(letter, guessed)
            // letterThing.letterOrUnderscore(false, false)


            if (mappedLetters[i].underLyingCharacter === " ") {
                mappedLetters[i].space = true;

            } else {
                mappedLetters[i].space = false;
            }

            this.wordDisplay = this.wordDisplay + mappedLetters[i].letterOrUnderscore(false, false);
        }
        console.log(this.wordDisplay)
        
        // for (var k = 0; k < this.wordDisplay.length; k++) {
        //     if (this.wordDisplay[k] !== "_" && this.wordDisplay[k] !== "\xa0\xa0" && this.wordDisplay[k] !== "\xa0") {
        //         this.lettersInWord++;
        //         console.log(this.lettersInWord)
        //     }
        // }
        
        if (!this.wordDisplay.includes("_")) {
            this.wordFinished = true;
           
        } else {
            this.wordFinished = false; 
           
        }
        this.wordDisplay = "";
        var letterThing = new Letter();
        console.log(letterThing.letterCount)
    }




    this.guessLetter = function (letter, guessed) {


        // A function that takes a character as an argument and calls the 
        // guess function on each letter object (the second function defined in Letter.js)
        // underLyingCharacterMatch(letter)
        this.newWordDisplay = Array.from(this.wordDisplay);
        // console.log(this.newWordDisplay)

        for (var j = 0; j < mappedLetters.length; j++) {

            this.newWordDisplay = mappedLetters[j].underLyingCharacterMatch(letter, guessed);
            
        }

        
    }

}




module.exports = Word;


