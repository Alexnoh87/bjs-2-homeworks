"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    let root = ((-b + Math.sqrt(d)) / (2 * a));
    let root2 = ((-b - Math.sqrt(d)) / (2 * a));
    arr.push(root, root2);
    return arr;
  } else if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root)
    return arr;
  } else 
    arr.push();
    return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let n = countMonths;

  let monthAmount = s * ( p + p / ((Math.pow((1 + p), n)) - 1));
  let totalAmount = monthAmount * n;

  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}