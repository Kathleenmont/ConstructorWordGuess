var Letter = function (underLyingCharacter, guessedYet, space) {
    this.underLyingCharacter = underLyingCharacter;
    this.guessedYet = guessedYet;
    this.space = space;

    // A function that returns the underlying character if the letter has been guessed, or  
    // underscores if the letter has not been guessed, and spaces if there are multiple words
    this.letterOrUnderscore = function (guessedYet, space) {
        if (this.guessedYet === true) {
            return this.underLyingCharacter + " ";

        } else if (this.space === true) {
            return "\xa0\xa0"
        } else {
            return "_ "
        }
    }
    // A function that takes the current lettter guessed and previous letters guessed as 
    // arguments and checks them against the underlying character, updating guessedYet to true 
    // if it has been guessed correctly
    this.underLyingCharacterMatch = function (letter, lettersArray) {
       
      
        if (lettersArray) {
           
            for (var k = 0; k < lettersArray.length; k++) {
                if (lettersArray[k] === this.underLyingCharacter) {
                    this.guessedYet = true;   
                }
            }
        }
        if (letter === this.underLyingCharacter) {
            this.guessedYet = true;
        }  
    }  
}


module.exports = Letter;
