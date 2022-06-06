//  17
// Merge two sorted arrays
// You are given two sotrted arrays that both only conatin integers.
// Your task is to merge this arrays into one and remove duplicateitems

function mergeArray(arr1, arr2) {
    //  let merged = arr1.concat(arr2)

    //  let removeDuplicate = merged.filter((position, index) =>
    //      merged.indexOf(position) === index
    // )
   
    //  return removeDuplicate

                            // OR

  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
console.log(mergeArray([1, 2, 3, 3], [9, 90]));