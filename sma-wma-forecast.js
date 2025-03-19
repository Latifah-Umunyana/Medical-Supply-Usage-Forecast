
// Function to calculate the Simple Moving Average

function forecastUsageSma(usage_list) {
    if (usage_list.length < 3) {
        console.log("Please input daily usage for at least the past three days");
        return;
    }

    const dataTypeCheck = usage_list.every(usage => typeof (usage) === 'number');

    if (!dataTypeCheck) {
        console.log("Please input daily usage as numbers");
        return;
    }


    const sumDailyUsage = usage_list.reduce((accumulator, currentValue) => accumulator + currentValue);
    const sma = sumDailyUsage / usage_list.length;
    console.log("Simple Moving Average Forecast:", sma.toFixed(2));
    return sma.toFixed(2);

};


// Function to calculate the Weighted Moving Average

function forecastUsageWma(usage_list) {
    if ( usage_list.length < 3) {
        console.log("Please input daily usage data not less than 3");
        return;
    }

    const dataTypeCheck = usage_list.every(usage => typeof (usage) === 'number');

    if (!dataTypeCheck) {
        console.log("Please input daily usage as numbers");
        return;
    }

    const weights = usage_list.map((_,index)=>{
        return index + 1;
    });

    const {usageWeights,totalWeights} = usage_list.reduce((accumulator, currentValue, index) => {

        accumulator.usageWeights += currentValue * weights[index];
        accumulator.totalWeights += weights[index];
        return accumulator;

    }, {usageWeights:0, totalWeights: 0});

    const wma = usageWeights/totalWeights;

    console.log("Weighted Moving Average Forecast:", wma.toFixed(2));
    return wma.toFixed(2);

};

const daily_usage = [100, 120, 110, 130, 125, 115, 140];
const wma_forecast = forecastUsageSma(daily_usage);
const sma_forecast = forecastUsageWma(daily_usage);