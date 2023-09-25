function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false; 
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here
  - Create an empty Set called seenNumbers.
  - Iterate over each number in the input array.
  - For each number, calculate its complement by subtracting it from the target.
  - Check if the complement is already in the seenNumbers Set.
  - If the complement is found, return true (a pair that adds up to the target is found).
  - Otherwise, add the current number to the seenNumbers Set.
  - If no such pair is found after iterating through the entire array, return false.
*/

/*
  Add written explanation of your solution here:
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
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
