/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
// reset button
let resetButton = document.querySelector('#reset-button');

// D6
let imageD6 = document.querySelector('#d6-roll');

// Double D6
let imageDoubleD61 = document.querySelector('#double-d6-roll-1');
let imageDoubleD62 = document.querySelector('#double-d6-roll-2');

// D12
let imageD12 = document.querySelector('#d12-roll');

// D20
let imageD20 = document.querySelector('#d20-roll');


// means
let meanD6 = document.querySelector('#d6-rolls-mean');
let meanDoubleD6 = document.querySelector('#double-d6-rolls-mean');
let meanD12 = document.querySelector('#d12-rolls-mean');
let meanD20 = document.querySelector('#d20-rolls-mean');


// medians
let medianD6 = document.querySelector('#d6-rolls-median');
let medianDoubleD6 = document.querySelector('#double-d6-rolls-median');
let medianD12 = document.querySelector('#d12-rolls-median');
let medianD20 = document.querySelector('#d20-rolls-median');


// modes
let modeD6 = document.querySelector('#d6-rolls-mode');
let modeDoubleD6 = document.querySelector('#double-d6-rolls-mode');
let modeD12 = document.querySelector('#d12-rolls-mode');
let modeD20 = document.querySelector('#d20-rolls-mode');




/*******************
 * EVENT LISTENERS *
 *******************/

imageD6.addEventListener('click', () => {
    console.log('D6 Clicked!');
    d6RollFunction();
});


//-------------------------------------------------------
imageDoubleD61.addEventListener('click', () => {
    console.log('Doubles 1 Clicked!');
    doubleD6RollFunction();
});

imageDoubleD62.addEventListener('click', () => {
    console.log('Doubles 2 Clicked!');
    doubleD6RollFunction();
});


//--------------------------------------------------------
imageD12.addEventListener('click', () => {
    console.log('D12 Clicked!');
    d12RollFunction();
});


//--------------------------------------------------------
imageD20.addEventListener('click', () => {
    console.log('D12 Clicked!');
    d20RollFunction();
});


//--------------------------------------------------------
resetButton.addEventListener('click', () => {
    console.log('Reset Clicked!');

    reset();
});
// same? - resetButton.addEventListener('click', reset);




/******************
 * RESET FUNCTION *
 ******************/

function reset() {
    
    // empty global arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    // reset images to start
    imageD6.src = './images/start/d6.png';
    imageDoubleD61.src = './images/start/d6.png';
    imageDoubleD62.src = './images/start/d6.png';
    imageD12.src = './images/start/d12.jpeg';
    imageD20.src = './images/start/d20.jpg';

    // mean text areas to N/A
    meanD6.innerText = 'N/A';
    meanDoubleD6.innerText = 'N/A';
    meanD12.innerText = 'N/A';
    meanD20.innerText = 'N/A';

    // median text areas to N/A
    medianD6.innerText = 'N/A';
    medianDoubleD6.innerText = 'N/A';
    medianD12.innerText = 'N/A';
    medianD20.innerText = 'N/A';

    // mode text areas to N/A
    modeD6.innerText = 'N/A';
    modeDoubleD6.innerText = 'N/A';
    modeD12.innerText = 'N/A';
    modeD20.innerText = 'N/A';


}

reset();

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction() {

    let result = getRandomNumber(6);

    imageD6.src = `./images/d6/${result}.png`;

    sixes.push(result);

    meanD6.innerText = getMean(sixes);
    medianD6.innerText = getMedian(sixes);
    modeD6.innerText = getMode(sixes);
    console.log(sixes);
};

function doubleD6RollFunction() {

    let result1 = getRandomNumber(6);
    let result2 = getRandomNumber(6);

    imageDoubleD61.src = `./images/d6/${result1}.png`;
    imageDoubleD62.src = `./images/d6/${result2}.png`;

    doubleSixes.push(result1, result2);

    meanDoubleD6.innerText = getMean(doubleSixes);
    medianDoubleD6.innerText = getMedian(doubleSixes);
    modeDoubleD6.innerText = getMode(doubleSixes);

    console.log(doubleSixes);
};


function d12RollFunction() {

    let result = getRandomNumber(12);

    imageD12.src = `./images/numbers/${result}.png`;

    twelves.push(result);

    meanD12.innerText = getMean(twelves);
    medianD12.innerText = getMedian(twelves);
    modeD12.innerText = getMode(twelves);

    console.log(twelves);
};


function d20RollFunction() {

    let result = getRandomNumber(20);

    imageD20.src = `./images/numbers/${result}.png`;

    twenties.push(result);

    meanD20.innerText = getMean(twenties);
    medianD20.innerText = getMedian(twenties);
    modeD20.innerText = getMode(twenties);

    console.log(twenties);
};



/****************
 * MATH SECTION *
 ****************/

function getMean(arr) {
    console.log(arr);
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}


function getMedian(arr) {
    
    arr.sort();
    console.log(arr);

    // Odd arr
    if (arr.length % 2 !== 0) {
        return arr[(arr.length-1) / 2];
    }

    // even arr
    if (arr.length % 2 === 0) {
        return (arr[arr.length/2-1] + arr[arr.length/2]) / 2;
    }
}


function getMode(arr) {

    // console.log(arr);

    // Object for numbers and rep counts
    modeObj = {};
        
    // makes obj keys out of each number
    // assigns them to modeObj
    arr.forEach(item => {
        modeObj[item] = 0;
    })
    // console.log(modeObj);

    // adds +1 for each occurrence of the number
    arr.forEach(item => {
        modeObj[item]++;
    })
    // console.log(modeObj);


    // loops through key/values in modeObj
    // sets mode to most repeated number
    // .push if more than one mode is found
    let highestRep = 0;
    let mode =  [];

    for (key in modeObj) {
        // console.log(key);

        if (modeObj[key] > highestRep) {
            highestRep = modeObj[key];
            mode = [Number(key)];

        } else if (modeObj[key] === highestRep) {
            mode.push(Number(key));
        }
    }

    // if all numbers have the same frequency
    if (mode === arr) {
        return `No mode!`;
    }

    return mode;
}