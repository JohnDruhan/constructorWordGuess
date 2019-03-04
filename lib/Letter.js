// The Letter constructor is responsible for displaying either an underscore or the underlying character for each letter in the word


// If a character is not a number or a letter, make it visible right away
// Save the underlying character
function Letter(char) {
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char;
}

// prototypes are optional

// Returns either an underscore or the underlying character depending on `this.visible`
//    because we call this function toString, when we call `this.letters.join` in
//    Word.js, JavaScript uses the value returned
Letter.prototype.toString = function () {
    if (this.visible === true) {
        return this.char;
    }
    return "_";
};

Letter.prototype.getSolution = function () {
    return this.char;
};

// Accepts a user's guess
// Otherwise return false
Letter.prototype.guess = function (charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
    }
    return false;
};

module.exports = Letter;
