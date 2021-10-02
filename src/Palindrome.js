
export function Palindrome (word) {
    
    const newWord = word.split('').reverse().join('');
        if(word == newWord) {
        return true; } 
        else { return false; }
}