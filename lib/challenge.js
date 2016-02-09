'use strict';

let toBinary = function(decimal){
  let binary = decimal.toString(2);
  return Number(binary);
};

let isPalindrome = function(input){
  let num = input.toString();
  let numArray = num.split('');
  let revArray = numArray.reverse();
  let palindrome = numArray.forEach(function(element, index){
    element === revArray[index];
  });
  return palindrome;
};

module.exports = () => {
  return true;
};
