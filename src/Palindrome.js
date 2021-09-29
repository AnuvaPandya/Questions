
export function Palindrome (word) {
    // const btn = document.getElementById("submit").value;
    
    const newWord = word.split('').reverse().join('');
    
    if(word == newWord) {
        return true;
        // if(document.getElementById('word').clicked == true){
        } 
        else { return false; }
}