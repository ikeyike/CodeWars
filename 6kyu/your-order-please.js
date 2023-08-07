// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
    if (words === "") {
      return "";
    }
  
    // Split the input string into an array of words
    const wordArray = words.split(' ');
  
    // Sort the words based on the numbers within them
    const sortedArray = wordArray.sort((a, b) => {
      const aNumber = getNumberFromWord(a); // Extract the number from word a
      const bNumber = getNumberFromWord(b); // Extract the number from word b
      return aNumber - bNumber;
    });
  
    // Reconstruct the sorted words into a single string
    const result = sortedArray.join(' ');
  
    return result;
  }
  
  // Function to extract the number from a word
  function getNumberFromWord(word) {
    // Initialize an empty string to store the number
    let number = '';
  
    // Iterate through the characters in the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
  
      // Check if the character is a digit (0-9)
      if (char >= '0' && char <= '9') {
        number += char; // Add the digit to the number string
      }
    }
  
    // Convert the number string to an integer and return it
    return parseInt(number);
}