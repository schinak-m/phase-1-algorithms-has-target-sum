function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbersSeen = {};
  for (const number of array) {
    const complement = target - number;
    if (numbersSeen[complement]) {
      return true;
    }
    numbersSeen[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O time complexity: O(n)
*/

/* 
  Add your pseudocode here

  Create a hash table called numbersSeen
  For each number in array
    Calculate complement as target minus number
    If complement is in numbersSeen
      Return true
    Add number to numbersSeen with a value of true
  Return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
