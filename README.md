# Medical Supply Usage Forecast

This project contains JavaScript functions that calculate the Simple Moving Average (SMA) and Weighted Moving Average (WMA) of daily usage data for Personal Protective Equipment (PPE), such as masks, gloves, and gowns in a hospital over the past N days and forecasts the next day's usage. By integrating these forecasting methods into the hospital's inventory management system, the hospital can make data-driven decisions about when to restock and how much PPE to order, ensure safety, and allocate resources more effectively, reducing both shortages and waste. This is especially important during times of crisis, when the ability to respond quickly and efficiently can save lives.

## Problem solving:

The task required taking an array of integers that represent the daily usage of PPE over the past N days and calculating the Simple Moving Average (SMA) and Weighted Moving Average (WMA).

I ensured that the array contained at least 3 elements, as a sufficient number of data points is needed for accurate calculation and prediction.

I also validated that all values in the array were numbers to prevent errors, providing the user with a clear message if the input was invalid.

The SMA was calculated by dividing the sum of the elements by the length of the array. For clarity, I rounded the result to two decimal places before returning the forecast.

The WMA was calculated by multiplying each element by its corresponding weight, summing the weighted values, and then dividing by the sum of the weights. To enhance readability, I rounded the result to two decimal places before returning the forecast.

## Key takeaway:

I learnt a new in-built method in javascript `every()`, which tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test, and false otherwise.

## Resources:

I used ChatGPT to understand the meaning of the terms SMA (Simple Moving Average) and WMA (Weighted Moving Average). By learning how they work, where and why they are used, and how they are calculated, I also gained insight into a common JavaScript convention: using an underscore `_` as a placeholder for an unused parameter, such as the element value within a map method. E.g: `map((_, index) => {`

## Running the Code Using Node.js

1.  Install Node.js if you haven’t already.
2.  Clone the repository:
    ```
    git clone https://github.com/Latifah-Umunyana/Medical-Supply-Usage-Forecast.git
    ```
3.  Open the terminal/command line.
4.  Navigate to the directory where `sma-wma-forecast.js` is located.
5.  Run the script using Node.js:
    ```
    node sma-wma-forecast.js
    ```
