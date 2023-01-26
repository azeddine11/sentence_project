let sentence = "The first test sentence in js. ";
let sentence_length = 0;
let vowel_num = 0;
let word_num = 0;

for (let i = 0; i < sentence.length; i++) {
// Count the length of the sentence
    sentence_length++;

// Count the number of words in the sentence
    if (sentence[i] === " ") {
        word_num++;
    }

// Count the number of vowels in the sentence
    if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u" || sentence[i] === "A" || sentence[i] === "E" || sentence[i] === "I" || sentence[i] === "O" || sentence[i] === "U") {
        vowel_num++;
    }
}

console.log("Sentence length: " + sentence_length);
console.log("Word count: " + word_num);
console.log("Vowel count: " + vowel_num);
