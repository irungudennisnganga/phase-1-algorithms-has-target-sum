function hasTargetSum(array, target) {
  // Write your algorithm here
  
  for(let i = 0; i < array.length ; i ++){
    // console.log(array[i]+array[5])
    for (let j = i+1 ; j< array.length ;j ++){
      if (array[i]+array[j] === target) return (true) 
      
    }
   
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  the hasTargetSum() takes in to parameters array of integers and a target
  make the first iteration inside the iteration make another iteration and 
  add the number of the first and second iteration
  check if their sum is equal to the target if true return true 
  else false

*/

/*
  Add written explanation of your solution here
  loops over an array of integers
  should take tw0 numbers add them and check with the target if true stop if false 
  continue take other two numbers and check

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
