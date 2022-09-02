function submit(){
    const data = document.getElementById("dataset").value;
    
    if(data !== ""){
        const dataset = data.split(',');
        const format =/^[0-9,.-]*$/;

        if((format.test(dataset)) && (data.length > 1)){
        const datasetArr = dataset.map(str => {
                return Number(str);
                });
            return datasetArr;
        } else if(format.test(dataset) == false){
            alert("Invalid data submitted. Ensure you entered numbers separated by commas(,)");
        } else {
            alert("Enter more than one item in the dataset");
        };
    } else {
        alert("No dataset entered");
    }  
}

function submitWeight(){
    const data = document.getElementById("weight").value;
    
    if(data !== ""){
        const dataset = data.split(',');
        const format =/^[0-9,.-]*$/;

        if((format.test(dataset)) && (data.length > 1)){
        const datasetArr = dataset.map(str => {
                return Number(str);
                });
            return datasetArr;
        } else if(format.test(dataset) == false){
            alert("Invalid data submitted. Ensure you entered numbers separated by commas(,)");
        } else {
            alert("Enter more than one item in the dataset");
        };
    } else {
        alert("No dataset entered");
    }  
}

function sortedArr(){
    if(submit() !== 0){
        const data = document.getElementById("weight").value;
        const weightDataset = data.split(',');
        const weightLength = weightDataset.length;
        const dataset = submit();
        const sortedArr = submit().sort((a,b) => a - b);
        const quantity = sortedArr.length;
        const displayDataSet = document.getElementById("data").innerHTML = "[Sorted Dataset: " + sortedArr + "]";
        const displayWeights = document.getElementById("display-weights").innerHTML ="[Weights: " + weightDataset + "]";
        const displayFrequency = document.getElementById("display-frequency").innerHTML ="[Dataset Cardinality: " + quantity + "]";
        const displayUnsortedDataset = document.getElementById("unsorted-data").innerHTML = "[Unsorted Dataset: " + dataset + "]";
        const displayWeightLength = document.getElementById("weight-count").innerHTML = "[Weight Cardinality: " + weightLength + "]";
        return document.getElementById("data").innerHTML = displayDataSet, displayWeights, displayFrequency, displayUnsortedDataset;
    } else {
        alert("Enter a valid dataset first");
    }
}

function findMean(){
    if(submit() !== 0 && submit().length>1){
        const mean = submit().reduce((a,b)=> a+b, 0) / submit().length;
        return document.getElementById("mean").value = mean;
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findMeanCV(){
    if(submit() !== 0 && submit().length>1){
        const mean = submit().reduce((a,b)=> a+b, 0) / submit().length;
        return document.getElementById("mean").value = mean;
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findWeightedMean(){
    if(submit() !== 0 && submit().length>1){
        const values = submit();
        const weightData = submitWeight();
        if(values.length !== weightData.length){
            alert("Dataset and Weights are of unequal length. Kindly reenter")
        } else {
            let a = 0;
            let b = 0;
            for (let i=0; i < values.length; ++i){
                const weight = weightData[i];
                a += weight * values[i];
                b += weight;
            }
            const weightedMean = a / b;
            return document.getElementById("weighted-mean").value = weightedMean;
        }
    } else {
    alert("Enter a valid dataset first");
    } 
}

function findMode(){
    if(submit() !== 0 && submit().length>1){
        const sortedArr = submit().sort((a,b) => a - b);
        const mode = {};
        let max = 0, count = 0;

        for(let i=0; i < sortedArr.length; i++){
            const item = sortedArr[i];

            if(mode[item]){
                mode[item]++;
            } else {
                mode[item] = 1;
            }

            if(count < mode[item]){
                max = item;
                count = mode[item];
            }
        }
        return document.getElementById("mode").value = max;
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findMedian(){
    const sortedData = submit().sort((a,b) => a - b);
    if(sortedData.length % 2 !== 0){
        const oddMedian = sortedData[Math.floor(sortedData.length/2)];
        return document.getElementById("median").value = oddMedian;
    } else {
        let mid1 = sortedData[sortedData.length / 2];
        let mid2 = sortedData[sortedData.length / 2 - 1]
        const evenMedian = (mid1 + mid2) / 2;
        return document.getElementById("median").value = evenMedian; 
    }
}

function findRange(){
    if(submit() !== 0 && submit().length>1){   
        const data = submit().sort((a,b) => a - b);
        const max = data[data.length - 1];
        const min = data[0];
        const range = max - min;
        return document.getElementById("range").value = range;
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findMeanDeviation(){
    if(submit() !== 0 && submit().length>1){
        const data = submit();
        const length = data.length;
        const mean = submit().reduce((a,b)=> a+b, 0) / submit().length;
        const arr = data.map(function(element){
            return Math.abs(element - mean);
        });
        const md = arr.reduce((a,b)=> a+b, 0)/length;
        return document.getElementById("mean-deviation").value = md;
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findVariance(){
    if(submit() !== 0 && submit().length>1){
        const data = submit();
        const length = data.length;
        const x = data.reduce((a,b)=> a+b, 0) / length;
        const dev_mean = data.map(function(element){
            return element - x;
        });
        const x_sq = dev_mean.map(function(element){
            return Math.abs(Math.pow(element,2));
        });
        const v = x_sq.reduce((a,b)=> a+b, 0);
        const pop_variance = v / length;
        const samp_variance = v / (length - 1);
        const str = "2";

        return document.getElementById("variance").value = "\u03C3" + "\u00B2" + " = " + pop_variance.toFixed(2) + ", s" + "\u00B2" + " = " + samp_variance.toFixed(2);
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findStandardDeviation(){
    if(submit() !== 0 && submit().length>1){
        const data = submit();
        const length = data.length;
        const x = data.reduce((a,b)=> a+b, 0) / length;
        const dev_mean = data.map(function(element){
            return element - x;
        });
        const x_sq = dev_mean.map(function(element){
            return Math.abs(Math.pow(element,2));
        });
        const v = x_sq.reduce((a,b)=> a+b, 0);
        const pop_variance = v / length;
        const samp_variance = v / (length - 1);

        const pop_sd = Math.sqrt(pop_variance);
        const samp_sd = Math.sqrt(samp_variance);
        document.getElementById("standard-deviation").value = "\u03C3" + " = " + pop_sd.toFixed(2) + ", s = " + samp_sd.toFixed(2);
    } else {
        alert("Enter a valid dataset first");
    } 
}

function quartile(){
    if(submit() !== 0 && submit().length>1){
        const sortedData = submit().sort((a,b) => a - b);
        const arr = sortedData.length;
        const secondHalf = (0.5) * arr;
        const firstHalf = (0.25) * arr;
        const thirdHalf = (0.75) * arr;
        return document.getElementById("quartile").value = "Q1: " + sortedData[firstHalf-1] + ",  Q2: "+ sortedData[secondHalf-1] + ", Q3: " + sortedData[thirdHalf-1];
    } else {
    alert("Enter a valid dataset first");
    } 
}

function interQuartile(){
    if(submit() !== 0 && submit().length>1){
        const sortedData = submit().sort((a,b) => a - b);
        const arr = sortedData.length;
        const firstHalf = (0.25) * arr;
        const fhalf = sortedData[firstHalf-1]
        const thirdHalf = (0.75) * arr;
        const thalf = sortedData[thirdHalf-1]
        return document.getElementById("inter-quartile").value = (thalf - fhalf).toFixed(1);
    } else {
    alert("Enter a valid dataset first");
    } 
}

function findQuartileDeviation(){
    if(submit() !== 0 && submit().length>1){
        const sortedData = submit().sort((a,b) => a - b);
        const half = Math.ceil(sortedData.length / 2);
        const firstHalf = sortedData.slice(0, half);
        const secondHalf = sortedData.slice(half);

        function findMedian(arr){
            const sortedData = arr.sort((a,b) => a - b);
            if(sortedData.length % 2 !== 0){
                const oddMedian = sortedData[Math.floor(sortedData.length/2)];
                return oddMedian;
            } else {
                let mid1 = sortedData[sortedData.length / 2];
                let mid2 = sortedData[sortedData.length / 2 - 1]
                const evenMedian = (mid1 + mid2) / 2;
                return evenMedian; 
            }
        }
    return document.getElementById("quartile-deviation").value = ((findMedian(secondHalf) - findMedian(firstHalf)) / 2);
    } else {
    alert("Enter a valid dataset first");
    } 
}

function findCoVariance(){
    if(submit() !== 0 && submit().length>1){
        const data = submit();
        const length = data.length;
        const x = data.reduce((a,b)=> a+b, 0) / length;
        const dev_mean = data.map(function(element){
            return element - x;
        });
        const x_sq = dev_mean.map(function(element){
            return Math.abs(Math.pow(element,2));
        });
        const v = x_sq.reduce((a,b)=> a+b, 0);
        const pop_variance = v / length;
        const samp_variance = v / (length - 1);
        const pop_sd = Math.sqrt(pop_variance);
        const samp_sd = Math.sqrt(samp_variance);

        const pop_cv = (pop_sd / x) * 1;
        const samp_cv = (samp_sd / x) * 1;
        return document.getElementById("cf-variance").value = samp_cv.toFixed(2) + "%";
    } else {
        alert("Enter a valid dataset first");
    } 
}
