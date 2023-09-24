const input = require('readline-sync');
function makeLine(size) {
    let line = '';  
    for (let i = 0; i < size; i++) {
    for (let i = 0; i < size; i++) {
      line += '#';
    }
  line += '\n'
  }
    return line;
  }
  console.log(makeLine(5));
  function makeRectangle(width,height) {
    let line = '';  
    for (let i = 0; i < height; i++) {
    for (let i = 0; i < width; i++) {
      line += '#';
    }
  line += '\n'
  }
    return line;
  }
  console.log(makeRectangle(5, 3));

  function makeRectangle(width,height) {
    let line = '';  
    for (let i = 0; i < height; i++) {
    for (let i = 0; i < width; i++) {
      line += '#';
    }
  line += '\n'
  }
    return line;
  }
  console.log(makeRectangle(5, 3));

  function makeDownwardStairs(height) {
    let line = '';  
    for (let i = 0; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      line += '#';
    }
  line += '\n'
  }
    return line;
  }
  console.log(makeDownwardStairs(5));

  function makeSpaceLine(numOfSpaces, numOfChars){
let line = ""
line += numSpaces(numOfSpaces)
line += numChars(numOfChars)
line += numSpaces(numOfSpaces)

return line
}
function numSpaces(numOfSpaces){
 let spaces = ""
  for (let j = 0; j < numOfSpaces; j++) {
spaces += " "
 }
 
 return spaces
}

function numChars(numOfChars){
  let Chars = ""
  for (let j = 0; j < numOfChars; j++) {
Chars += "#"
 }
 return Chars

}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

function reverse(triangle) {
let reverse = ""

  for (i=triangle.length-1; i >=0; i--){
reverse+=triangle[i]

}
return reverse
}
console.log(reverse(makeIsoscelesTriangle(5)))


function myFunc(radius) {
  let area = Math.PI * radius**2;
  return area;
}