// One solution is to use the 'Two Pointers' technique
// The day we buy  will be one pointer (left), and the day we sell will be another (right)
    // left gets initialized at index 0 (day 1) and right gets initialized to index 1 (day 2)
    // profit is calculated each iteration -- gets compared to maxProfit -- maxProfit gets updated accordingly 
    // if right is less than left, left's position gets updated to right's
//Use a while loop that runs as long as R < prices.length

//this solves the logical issue I encountered with test case 3 ( [2, 4, 1] )

// Credits to NeetCode for providing the solutions as well as detailed explanations

/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function (prices) {
    let buy = 0;        //initialize buy at index 0
    let sell = 1;       //initialize sell at index 1
    let maxProfit = 0;

    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy];
            maxProfit = Math.max(maxProfit, profit);
        }
        //shift buy day to the sell day if prices[buy] > prices[sell]
        else{
            buy = sell;
        }
        sell++;
    }

    return maxProfit;
};