var Letter = require("./Letter");

// The Word constructor is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
    // word.split - splits word into array of letters
    //     .map - instantiate a new `Letter` for each character and return an array
    //            referred to with the instance variable, `letters`
function Word(word) {
    this.letters = word.split("").map(function (char) {
        return new Letter(char);
    });
}

// prototypes are optional, but will take up less memory than if we defined
//   each method in the constructor as an instance method
// setting the method on the prototype means all instances of Word share this code
//    but when it is called, `this` refers to that particular instance
// iterate over each letter
// return the solution for each to form an array of solved letters
// create a string from the array of solved letters
Word.prototype.getSolution = function () {
    return this.letters.map(function (letter) { 
        return letter.getSolution(); 
    }).join(""); 
};

// setting `toString()` as a method lets us concatenate it like we would a string
// see Letter.prototype.toString in Letter.js
Word.prototype.toString = function () {
    return this.letters.join(" "); 
};


    // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
Word.prototype.guessLetter = function (char) {
    var foundLetter = false;
    this.letters.forEach(function (letter) {
        if (letter.guess(char)) {
            foundLetter = true;
        }
    });

    // Print the word guessed so far--because we set the method for toString,
    //  JavaScript will automatically concatenate this even if we don't call toString
        // return whether we found a letter
    console.log("\n" + this + "\n");
    return foundLetter;
};

// Returns true if all letters in the word have been guessed
    // The `every` method returns true if the callback function returns true for every element in the array
Word.prototype.guessedCorrectly = function () {
    return this.letters.every(function (letter) {
        return letter.visible;
    });
};

module.exports = Word;
