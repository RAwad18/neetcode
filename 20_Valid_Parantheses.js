/*
    - In order to solve this problem, we need to implement a stack and hashmap
    - Originally, I didn't think of using either - especially not a hashmap (just called Map in JS)

    - Essentially, whenever we encounter a closing brace of any kind, we'll 'refer' to the hashmap to find the matching open brace
    - ...and since it's valid if you have anywhere from 1 to infinite amount of open braces before we encounter a closing brace
    - ...we need to implement a 'stack' (refer below)

        1.  ([{}])
        2.  ([  ])
        3.  (    )

        4.  CLEAR!
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    
    let c = "";
    const stack = [];
    const closingPara = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ]);


    for (let i = 0; i < s.length; i++) {
        // set the current character to a variable --- so we don't constantly have to type s[i]
        c = s[i];

        // check if hashmap HAS a key equal to the current character
        // if TRUE, that means we've encountered a closing brace --- check if the last item in the 'stack' array is equal to the current character's OPEN brace
            // if TRUE, remove the last item in the 'stack' array --- so that we can make our way through the rest of the string
            // if FALSE, then the string is not valid
        // if FALSE, that means we've encountered an open brace --- push it to the stack
        if (closingPara.has(c)) {
            if (stack.length !== 0 && closingPara.get(c) === stack[stack.length - 1])       // the code succeeded both with and without checking if the stack array was empty ('stack.length === 0')
                stack.pop();
            else
                return false;
        }
        else {
            stack.push(c)
        }
    }

    // if the stack is empty (meaning an equal amount of opening and closing parantheses) return true
    // otherwise, return false (more open braces than closing ones --- so it is not valid)
    return stack.length === 0 ? true : false

};