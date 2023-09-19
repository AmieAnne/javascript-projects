const input = require('readline-sync');
let str = "LaunchCode";
let str2 = "Launchcode"
let str3 = "nchCodeLau"

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
console.log(str.slice(3)+str.slice(0,3))

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log("Str has " + str.length + " characters. Str 2 has " + str3.length + " characters.")
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let answer = 3
let question = Number(input.question("How many characters were effected? "));
this.answer
if (question == answer) {
    console.log("YES! Good job! 😍");
  }
  else if (question != answer){
    console.log("No! Sorry. 😓");
  }
