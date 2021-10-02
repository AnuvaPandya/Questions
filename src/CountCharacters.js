export function countCharacter (word) {
    let count = {};
    for(var i = 0;  i<word.length; i++){
        if(word[i] in count){
         count[word[i]] = count[word[i]] + 1;
        } else {
            count[word[i]] = 1;
        }
    }
    return count;

}