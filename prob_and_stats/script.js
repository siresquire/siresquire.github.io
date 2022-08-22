function submit(){
    const dataset = (document.getElementById("dataset").value).split(',');
    const format =/^[0-9,.]*$/;

    if(format.test(dataset)){
       const datasetArr = dataset.map(str => {
        return Number(str);
       });
    return datasetArr;
    } else {
       alert("Invalid data submitted. Ensure you entered numbers separated by commas(,)");
    };  
}

function submitWeight(){
    const dataset = (document.getElementById("weight").value).split(',');
    const datasetArr = dataset.map(str => {
        return Number(str);
    });
    return datasetArr;
}

function sortedArr(){
    if(submit() !== 0 && submit().length>1){
        const sortedArr = submit().sort((a,b) => a - b);
        const quantity = sortedArr.length;
        const displayDataSet = document.getElementById("data").innerHTML = "[Dataset: " + sortedArr + "]";
        const displayWeights = document.getElementById("display-weights").innerHTML ="[Weights: " + submitWeight() + "]";
        const displayFrequency = document.getElementById("display-frequency").innerHTML ="[Dataset Count: " + quantity + "]";
        console.log(sortedArr);
        return document.getElementById("data").innerHTML = displayDataSet, displayWeights, displayFrequency;
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

function findWeightedMean(){
    if(submit() !== 0 && submit().length>1){
        const values = submit();
        const weightData = submitWeight();
        if(values.length !== weightData.length){
            alert("Values and Weights are of unequal length. Kindly reenter")
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
        const x = data.reduce((a,b)=> a+b, 0);
        const x_sq = data.map(function(element){
            return Math.abs(Math.pow(element,2));
        });
        const v = x_sq.reduce((a,b)=> a+b, 0);
        const variance = (v/length) - Math.pow((x/length),2);
        return document.getElementById("variance").value = variance;
    } else {
        alert("Enter a valid dataset first");
    } 
}

function findStandardDeviation(){
    if(submit() !== 0 && submit().length>1){
        const data = submit();
        const length = data.length;
        const x = data.reduce((a,b)=> a+b, 0);
        const x_sq = data.map(function(element){
            return Math.abs(Math.pow(element,2));
        });
        const v = x_sq.reduce((a,b)=> a+b, 0);
        const variance = (v/length) - Math.pow((x/length),2);

        const sd = Math.sqrt(variance);
        document.getElementById("standard-deviation").value = sd;
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
        const mean = submit().reduce((a,b)=> a+b, 0) / submit().length;

        const data = submit();
        const length = data.length;
        const x = data.reduce((a,b)=> a+b, 0);
        const x_sq = data.map(function(element){
            return Math.abs(Math.pow(element,2));
        });
        const v = x_sq.reduce((a,b)=> a+b, 0);
        const variance = (v/length) - Math.pow((x/length),2);
        const sd = Math.sqrt(variance);

        const cv = Math.floor(((sd/mean) * 1) * 100);
        return document.getElementById("cf-variance").value = cv + "%";
    } else {
        alert("Enter a valid dataset first");
    } 
}
