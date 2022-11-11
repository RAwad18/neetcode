/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
   and removing all non-alphanumeric characters, it reads the same forward and backward. 
   Alphanumeric characters include letters and numbers.
        
   Given a string s, return true if it is a palindrome, or false otherwise. */

/**
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function (s) {
    let reverse = "";
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');;    //removes all non-alphanumeric characters + lowercases

    //loops through the characters of the string like elements of an array - starts from the back and is 'added' to 'reverse'
    for (let i = s.length - 1; i > -1; i--) {
        reverse += s[i];
    }

    //if the string that's passed and the 'reverse' string match, return true - otherwise, return false
    if (s === reverse)
        return true;
    else
        return false;
};

/* Results 
    - It was accepted first time! (Had a similar question in my Java class)
    - Runtime was better than ~58%
    - Memory was better than ~42%
*/

/* Goals
    - Improve runtime and memory if I can
*/