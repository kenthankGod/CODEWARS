/* squareNum  */

function squareSum(numbers) {
  return numbers.reduce((acc, cv) => Math.pow(cv, 2) + acc, 0);
}