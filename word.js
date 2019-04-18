var Letter = require("./letter");

var wordDisplay = "";
var space = false;
// var letterChosen = new Letter(answers.letter, false, false);


var Word = function (lettersOfWord) {
    this.lettersOfWord = [];
    // A function that returns a string representing the word. This should call the function on each 
    // letter object (the first function defined in Letter.js) that displays the character or an
    //  underscore and concatenate those together.
    this.wordString = function (letter) {
        var mappedLetters = lettersOfWord.map(function (item) {
            var itemLetter = new Letter(item, false, false)
            return itemLetter
        })
        // var car = "";
        for (var i = 0; i < mappedLetters.length; i++) {
            // word = new Word(lettersOfWord);
            // word.wordString();
            var letterThing = new Letter();
            letterThing.letterOrUnderscore(false, false)
            console.log("guessed !!!" + letterThing.letterOrUnderscore(false, false))
            console.log("this is LETTER " + letter)

            if (mappedLetters[i].underLyingCharacter === " ") {
                mappedLetters[i].space = true;

            } else {
                mappedLetters[i].space = false;
            }
            console.log(mappedLetters[i])
            
            // console.log
            wordDisplay = wordDisplay + mappedLetters[i].letterOrUnderscore(false, false);
        }
       console.log(wordDisplay)
        
    }
   
    // return car;
    // for (var i = 0; i < lettersOfWord.length; i++) {
    //     var guessed = letterChosen.underLyingCharacterMatch(lettersOfWord[i])

    //     if (lettersOfWord[i] === " ") {
    //         letterChosen.space = true;

    //     } else {
    //         letterChosen.space = false;
    //     }
    //     wordDisplay += letterChosen.letterOrUnderscore(guessed);
    // }
    //     console.log(wordDisplay)

    this.guessLetter = function (letter) {
        // A function that takes a character as an argument and calls the 
        // guess function on each letter object (the second function defined in Letter.js)
        // underLyingCharacterMatch(letter)
        for (var i = 0; i < lettersOfWord.length; i++) {


            var currentLetter = new Letter(letter, false, false);
            currentLetter.underLyingCharacterMatch(letter)
            console.log("var currnent letter " + currentLetter)
            console.log("new" + letter)
            var guessed = letterB.underLyingCharacterMatch(lettersOfWord[i])
            console.log("var guessed " + guessed)

        }

    }

}


module.exports = Word;
var letterB = new Letter("c", false, false);
// var letterChosen = new Letter(letterChosen, false, false)
// var charGuessed = new Letter(letterChosen, false, false);
// var word1 = new Word(["c", "r", "a", "z", "y"]);

// console.log(letterC)
// console.log(word1)
// word1.wordString();
