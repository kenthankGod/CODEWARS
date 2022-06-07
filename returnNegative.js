// 18
// Given a positive number num Return the negative of that number
// example: 
// 10 -> -10
// 6 -> -6
function makeNegative(num){
  return -Math.abs(num)

        // OR
// if (num > 0) {
//     return -num
// } else {
//     return num
// }
} console.log(makeNegative(10));