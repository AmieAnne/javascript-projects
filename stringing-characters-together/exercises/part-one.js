let num = 1001;
let num2 = 1986.12

//Returns 'undefined'.
let strnnumber = num.toString()
console.log(typeof(strnnumber))


//Use type conversion to print the length (number of digits) of an integer.
 console.log(String(num).length-1);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
 console.log(String(num2).length-1);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num2).includes('.')){
    console.log(String(num2).length-1);
    } else {
    console.log(String(num2).length);
    }
