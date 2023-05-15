/* 
    The problem's title is literally Binary Search --- so that's exactly what we implement

        - set 2 pointers at start & end of nums

        - find the mid-point --- compare to target
            - if less than, set left pointer =  midpoint + 1
                (everything to the left of the midpoint wont contain the target since nums is sorted in ascending order)
                
            - if greater than --- set right pointer = midpoint - 1
               (everything to the right of the midpoint wont contain the target since nums is sorted in ascending order)
            
            - if neither, than that means we found our target --- return midpoint 
                midpoint is the index of the target

            - if while loop ends (did not find target) then return -1
            
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    // let m = 0;

    // in a small array, the midpoint will either be equal to the right pointer or both pointers
    // if target is larger than midpoint, left pointer will essentially equal 'right pointer + 1' --- meaning left pointer is out of bounds
    // if target is smaller than midpoint, right pointer will equal 'left pointer - 1' --- meaning right pointer is out of bounds
    // left pointer should always be smaller or equal to the right pointer (or else it wouldnt be a left pointer)
    while (l <= r){
        let m = Math.floor((l + r) / 2)
        
        if(nums[m] < target)
            l = m + 1
        else if (nums[m] > target)
            r = m - 1
        else
            return m
    }
    
    return -1
};