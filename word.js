var Letter = require("./letter");


var space = false;
var mappedLetters;
// var letterChosen = new Letter(answers.letter, false, false);


var Word = function (lettersOfWord) {
    var wordDisplay = "";
    var newWordDisplay = []
    this.lettersOfWord = [];
    this.addLetters = function (underChar, guessed, spaces) {
        this.lettersOfWord.push(new Letter (underChar, guessed, spaces));
        // console.log("----- the updated array: "+this.letters)
    }
    
    // A function that returns a string representing the word. This should call the function on each 
    // letter object (the first function defined in Letter.js) that displays the character or an
    //  underscore and concatenate those together.
    this.wordString = function (letter, guessed) {
         mappedLetters = lettersOfWord.map(function (item) {
            var itemLetter = new Letter(item, false, false)
            return itemLetter
        })
        // var car = "";
        for (var i = 0; i < mappedLetters.length; i++) {
            // word = new Word(lettersOfWord);
            // word.wordString();
            var letterThing = new Letter();
            this.guessLetter(letter, guessed)
            letterThing.letterOrUnderscore(false, false)
            // console.log("guessed !!!" + letterThing.letterOrUnderscore(false, false))
            // console.log("this is LETTER " + letter)

            if (mappedLetters[i].underLyingCharacter === " ") {
                mappedLetters[i].space = true;

            } else {
                mappedLetters[i].space = false;
            }
            // console.log(mappedLetters[i])
            
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

    this.guessLetter = function (letter, guessed) {
       
       
        
        // letterDemo="a";
        // secretword="crazy cat";
        // wordArray = ["_ ", "_ ", "_ ", "_ ", "_ ", "\xa0\xa0", "_ ", "_ ", "_ "];
        // var newWordArray = [];
        // console.log(wordArray.join(""))
        // // console.log("WORD DIPLAY " + wordDisplay)
        // for (var j = 0; j < secretword.length; j++) {
        //     if (letterDemo === secretword[j]) {
        //         var isInword = true;
        //         var indexOf = [];
        //         indexOf.push(j)
        //         console.log(indexOf)
        //         newWordArray = wordArray;
        //         newWordArray[indexOf[0]] = letterDemo;
        //         newWordArray[indexOf[1]] = letterDemo;
        //         newWordArray[indexOf[2]] = letterDemo;
        //         newWordArray[indexOf[3]] = letterDemo;
               
        //     } else {
        //         isInword = false;
        //     }
        // }

        // console.log(newWordArray.join(""))
        //forloop that checkeds if there is a match
        //if there is a match go ahead and update the array with matched letter
        //store a bool val to true
        //if bool val truefind the index
        //update the blank array to reflect the found index
        //_a_

        // A function that takes a character as an argument and calls the 
        // guess function on each letter object (the second function defined in Letter.js)
        // underLyingCharacterMatch(letter)
        newWordDisplay = Array.from(wordDisplay);
        console.log(newWordDisplay)
       
        for (var j = 0; j < mappedLetters.length; j++) {
            
            // if (letter === mappedLetters[j].underLyingCharacter) {
            //     console.log("!!!!!!------" + letter)
                
            //     var isInword = true;
            //     var indexOf = [];
            //     indexOf.push(j)
            //     console.log(indexOf)
                
                
            //     newWordDisplay[indexOf[0]] = letter;
            //     newWordDisplay[indexOf[1]] = letter;
            //     newWordDisplay[indexOf[2]] = letter;
            //     newWordDisplay[indexOf[3]] = letter;
            // } else {
            //     isInword = false;
            // }
           // // var currentLetter = new Letter(letter);
        //    -------------------
            newWordDisplay = mappedLetters[j].underLyingCharacterMatch(letter, guessed)
            // console.log("NEW WORD DISPLAY AFTER " + newWordDisplay)
            // console.log("MAPPED LETTERS " + mappedLetters[j].underLyingCharacter)
            // -----------------------------------------------------------
            // console.log("current letter " + mappedLetters[i].underLyingCharacter.underLyingCharacterMatch(letter))
            // word = new Word(lettersOfWord);
            // word.wordString();
            // letter = new Letter(letter)
            // letter.underLyingCharacterMatch()
            
            // var guessed = currentLetter.underLyingCharacterMatch(mappedLetters[i])
            // console.log("VAR currnent letter.guessed yet " + currentLetter.guessedYet)
            // console.log("var guessed " + guessed)
            // this.wordString()

        }
        
        // console.log(typeof newWordDisplay)
       
    }

}
// check array at words. letter guess



module.exports = Word;
// var letterB = new Letter("c", false, false);
// var letterChosen = new Letter(letterChosen, false, false)
// var charGuessed = new Letter(letterChosen, false, false);
// var word1 = new Word(["c", "r", "a", "z", "y"])

// console.log(letterB)
// console.log(word1)
// word1.wordString();

// word1.addLetters("A", false, false);
//console.log("-----------------"+word1.lettersOfWord);

