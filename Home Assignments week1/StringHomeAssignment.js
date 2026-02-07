let s = "Hello World"
let word = s.split(" ");
let secondWord = word[word.length-1];
console.log("Length of second word: "+ '' +secondWord.length);

let s1 = " fly me to the moon ";
let word1 = s1.trim().split(" ");
let lastWord = word1[word1.length-1];
console.log("Length of last word: "+ '' +lastWord.length);

let input1 = "hello"
let input2 = "world"

let sortedinput1 = input1.split('').sort().join();
let sortedinput2 = input2.split('').sort().join();
if(sortedinput1==sortedinput2){
    console.log("Strings are anagram")
}
else{
    console.log("Strings are not anagram")
}
