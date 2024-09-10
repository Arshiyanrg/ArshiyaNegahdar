function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = "";

    words.forEach(function(word) {

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}

// Example usage
const sentence = "این یک جمله تستی برای پیدا کردن طولانی ترین کلمه است";
const longestWord = findLongestWord(sentence);
console.log("Longest word:", longestWord);