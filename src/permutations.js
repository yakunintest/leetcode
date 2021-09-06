/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  let result = [];

  function helper(nums, arr) {
    if (nums.length === 0) {
      return result.push([...arr])
    }
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]); // 0

      let decreased = nums.filter((n, index) => index !== i);

      helper(decreased, arr);

      arr.pop(); // unchoose

    }
  }

  helper(nums, []);
  return result;
};

console.log(permute([1, 2, 3]))
console.log(permute([0, 1]))
console.log(permute([1]));
