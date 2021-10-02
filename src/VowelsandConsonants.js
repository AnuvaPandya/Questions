export function VowelsandConsonants (word) {
    var vowels = 0;
    var consonants =0;
    for (var i =0; i<=word.legth; i++){
        if(word[i] == 'a' ||word[i] == 'e'||word[i] == 'i' ||word[i] == 'o'||word[i] == 'u'){
            vowels++; 
        }
        else {
            consonants++; 
        }
    }       
        console.log("No. of vowels: " + vowels);
        console.log("No. of consonants: " + consonants);
    }
