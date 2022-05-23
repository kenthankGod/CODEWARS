 /* DdoubleChar 

 Given a string, you have to return a string in which each character (case sensitve) is reapted once */

//  Answer
function DdoubleChar(str) {
    // let repeat =  str.split("").map(n => n + n).join("")

    //  best practice
  let repeat = "";

  for (let i = 0; i < str.length; i++) {
    repeat += str[i] + str[i];
  }
  return repeat
}
console.log(DdoubleChar("javascript"));  
