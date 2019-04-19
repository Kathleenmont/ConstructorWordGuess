var Letter = function (underLyingCharacter, guessedYet, space) {
    this.underLyingCharacter = underLyingCharacter;
    this.guessedYet = guessedYet;
    this.space = space;
    // A function that returns the underlying character if the letter has been guessed, or a 
    // placeholder (like an underscore) if the letter has not been guessed

    this.letterOrUnderscore = function (guessedYet, space) {
        if (this.guessedYet === true) {
            return this.underLyingCharacter + " ";
            // console.log(this.underLyingCharacter)
        } else if (this.space === true) {
            return "\xa0\xa0"
        } else {
            return "_ "
            // console.log("_")
        }
    }
    // A function that takes a character as an argument and checks it against 
    // the underlying character, updating the stored boolean value to true if 
    // it was guessed correctly
    this.underLyingCharacterMatch = function (letter, lettersArray) {
       
        // console.log("lettter = " + letter)
        // console.log("this. underlying character " + this.underLyingCharacter)
        if (lettersArray) {
          
            for (var k = 0; k < lettersArray.length; k++) {
                if (lettersArray[k] === this.underLyingCharacter) {
                    this.guessedYet = true;
                    console.log("guessed from letters Array!!!!!!! " + this.guessedYet)
                }
            }
        }
        if (letter === this.underLyingCharacter) {
            this.guessedYet = true;
        console.log(this.guessedYet)
        }
        // } else {
        //     this.guessedYet = false;
        // }

    }


}

// var letter = new Letter(letterChosen, false, false);

module.exports = Letter;
