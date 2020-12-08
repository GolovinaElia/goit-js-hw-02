let findLongestWord = function (string) {
    const results = string.split(' ');
    let LongestWord = results[0];

    for (const result of results) {
        if (result.length > LongestWord.length) {
            LongestWord = result;
        }
    }
    return LongestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'