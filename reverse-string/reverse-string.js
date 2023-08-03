//Solution 1

// function reverseStr(str){
// return str.split("").reverse().join("");
// }

//Solution 2

// function reverseStr(str) {
//   return [...str].reverse().join("");
// }

//Solution 3 - for-of loop

// function reverseStr(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

//Solution 4 - reduce

function reverseStr(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverseStr;
