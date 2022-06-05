// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Math.min(...args);
    return min
  }
}

let test = new SmallestIntegerFinder( [34, -345, -1, 100])

test.findSmallestInt()