// Given a set of numbers, return the additive inverse of each.
//  Each positive becomes negatives, and the negatives become positives.

// example:
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// create your function, map through the array and simply add "-" to "each" element,
//  remember "map" returns a "new" array
// so map method is the best approach for me
// Answer
 let invert = array =>  array.map((e) => -e);

console.log(invert([1,2,3,-4]));