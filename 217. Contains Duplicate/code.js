/* 217. Contains Duplicate 
        Given an integer array nums, return true if any value appears at least twice 
        in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

runTests();

var containsDuplicate = function (nums) {

    let isDuplicate = false;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                isDuplicate = true;
                break;
            }
        }
    }

    if (isDuplicate == true)
        return true;
    else
        return false;

};


/* RESULTS 
    - It was accepted: good on memory but runtime was slow
*/

/*Improvements 
    - Try to improve runtime if I can
*/
