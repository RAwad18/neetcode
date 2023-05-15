/*
    - First, check if both strings have the same length
        - if not, return false bc it's not an anagram

    - Then, create a hashmap for each string
        - Each UNIQUE character is a key
        - The number of times a character appears is the value
        
    - Then, check if each character appears the same number of times
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // check lengths
    if (s.length !== t.length)
        return false;

    const sMap = new Map();
    const tMap = new Map();

    //creates hashmap for s
    for (let i = 0; i < s.length; i++) {
        if (typeof sMap.get(s[i]) === 'undefined')
            sMap.set(s[i], 0);
        else
            sMap.set(s[i], sMap.get(s[i]) + 1)
    }

    //creates hashmap for t
    for (let i = 0; i < t.length; i++) {
        if (typeof tMap.get(t[i]) === 'undefined')
            tMap.set(t[i], 0);
        else
            tMap.set(t[i], tMap.get(t[i]) + 1)
    }

    //checks if each letter appears the same amount of times
    for (let key of sMap.keys()) {
        if (sMap.get(key) !== tMap.get(key))
            return false;
    }

    return true;
};
