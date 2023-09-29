function getArrayParams(...arr) { 
      
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
    for (let i = 0; i < arr.length; i ++) {
     if(arr[i] < min)
        min = arr[i]; 
     if(arr[i] > max)
        max = arr[i]; 
      sum += arr[i];
    }
    
  let avg = Number((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) { 

  let sum = 0;
    for (let i = 0; i < arr.length; i ++) {
     sum += arr[i];
    }

  return sum;
}

function differenceMaxMinWorker(...arr) { 
  let min = Infinity;
  let max = -Infinity;
  let difference;

  if(arr.length === 0) 
    return 0;
  
    for (let i = 0; i < arr.length; i ++) {
      if(min > arr[i]) min = arr[i];
      if(max < arr[i]) max = arr[i];      
    }
    difference = max-min;
    
  return difference;
}

function differenceEvenOddWorker(...arr) {
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd;

  if (arr.length === 0) 
    return 0;
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i]%2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    differenceEvenOdd = sumEvenElement - sumOddElement;
  
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements;

  if (arr.length === 0) 
    return 0;
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i]%2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      } 
    }
    averageEvenElements = Number ((sumEvenElement / countEvenElement).toFixed(2));
  
  return averageEvenElements;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let valueFunction;

  if (arrOfArr.length === 0) 
    return 0;
  
    for (l = 0; l < arrOfArr.length; l++) {
       valueFunction = func(...arrOfArr[l]);
       if (valueFunction > maxWorkerResult) {
        maxWorkerResult = valueFunction;
       }
    }
  
  return maxWorkerResult;
}