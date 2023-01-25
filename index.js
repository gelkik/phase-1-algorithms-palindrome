function isPalindrome(word) {
  // Write your algorithm here
  // const palArr = []
  // for (i=word.length-1;i>=0;i--){
  //   palArr.push(word[i]);
  // // }
  // return palArr.join('') === word;
  return word.split('').reverse().join('') === word;
}

/* 
  Add your pseudocode here
*/
  // a constant is equal to a blank array
  // 
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
