var str = process.argv.slice(2);
​
function countLetters(str) {
  var counterObject = {};
  var inputWord = str.join('').split('');
  var str = ''
​
  for (var i = 0; i < inputWord.length; i++) {
    if (!counterObject[inputWord[i]]) {
      counterObject[inputWord[i]] = i
    } else {
      counterObject[inputWord[i]] = `${counterObject[inputWord[i]]}, ${i}`;
    }
  }
  return counterObject;
}
​
console.log(countLetters(str));