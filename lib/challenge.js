'use strict';

let toBinary = function(decimal){
  let binary = decimal.toString(2);
  return binary;
};

let isPalindrome = function(input){
  let num = input.toString();
  return num === num.split('').reverse().join('');
};

let total = 0;

for (let i = 0; i <= 1000000; i++){
  if ((isPalindrome(i) === true) && (isPalindrome(toBinary(i)) === true)){
    total += i;
  }
}

console.log(total);

module.exports = () => {
  return true;
};
