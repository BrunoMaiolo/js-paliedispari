let userWord = prompt("Enter a word");

function isPalindrome(word) {
    let reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
}

if (isPalindrome(userWord)) {
    console.log("The Word is a palindrome");
} else {
    console.log("The word is not palindrome");
}