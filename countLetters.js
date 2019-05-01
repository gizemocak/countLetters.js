var str = process.argv.slice(2);

function countLetters(str) {
    var counterObject = {};
    var inputWord = str.join('').split('');

    for (var i = 0; i < inputWord.length; i++) {
        if (!counterObject[inputWord[i]]) {
            counterObject[inputWord[i]] = 1
        } else {
            counterObject[inputWord[i]] = counterObject[inputWord[i]] + 1;
        }
    }

    return counterObject;
}

console.log(countLetters(str));