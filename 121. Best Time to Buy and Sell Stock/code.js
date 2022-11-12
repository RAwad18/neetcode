/*You are given an array prices where prices[i] is the price of a given stock on the i-th day.
    You want to maximize your profit by choosing a single day to buy one stock 
    and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. 
    If you cannot achieve any profit, return 0. */

/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function (prices) {
    let minIndex = 0;
    let minPrice = 0;
    let maxPrice = 0;

    for (let i = 0; i < prices.length; i++) {

        if (i === 0) {
            minIndex = 0;
            minPrice = prices[0];
        }
        else {
            if (prices[i] < minPrice) {
                minPrice = prices[i]
                minIndex = i;
            }
        }
    }

    if (minIndex === (prices.length - 1))
        return 0;
    else {
        const newPrices = prices.slice(minIndex + 1);

        for (let i = 0; i < newPrices.length; i++) {
            if (i === 0) {
                maxPrice = newPrices[i];
            }
            else {
                if (newPrices[i] > maxPrice) {
                    maxPrice = newPrices[i];
                }
            }
        }
        return maxPrice - minPrice;
    }
};

//For Test Cases
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7,6,4,3,1];
const prices3 = [2, 4, 1];

let test = maxProfit(prices1);
console.log(test);
test = maxProfit(prices2);
console.log(test);
test = maxProfit(prices3);
console.log(test);


/* Results 
    - It failed the first time (kept returning -1 regardless of the test case) for two reasons
        - I put 'if (minIndex === prices[prices.length - 1])' instead of 'if (minIndex === (prices.length - 1))' --- (silly mistake)
        - I put 'maxPrice === newPrices[i];' in both places, instead of 'maxPrice = newPrices[i];' --- (took me forever to find it lol)
    - It failed second time due to something like test case 3
*/

/* Goals
    - 
*/