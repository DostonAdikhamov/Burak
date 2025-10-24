console.log("TASK K");
function unlilar(str: string): number {
  const vowels: string = "aeiouAEIOU";
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
console.log(unlilar("Education"));  
console.log(unlilar("Uzbekistan")); 


// console.log("TASK J");
// function findLongestWord(str: string): string {
//   const words: string[] = str.split(" ");
//   return words.reduce((longest: string, current: string): string => {
//     return current.length > longest.length ? current : longest;
//   }, "");
// }

// console.log(findLongestWord("Qani nima qilyapsilar?"));

// console.log("Task I");
// function majorityElement(arr: number[]): number {
//   let max = 0;
//   let javob = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) count++;
//     }
//     if (count > max) {
//       max = count;
//       javob = arr[i];
//     }
//   }

//   return javob;
// }

// console.log(majorityElement([1, 3, 3, 4, 5, 4, 3, 4])); 


/** Project Standarts
   - Logging standarts
   - Naming Standarts
      function, method, variable => CAMEL goHome
      class => PASCAL                     
      folder => KEBAB
      css => SNAKE
   - Error handling
   
 **/

/** 
 Traditional API
 Rest API
 GraphQL API 
**/


// console.log("TASK H2");
// function ajratuvchiNatsist (str: string): string {
//   let javob = "";
//   for (const i of str) {
//     if ( i >= "0" && i <= "9" ) javob += i;
//   }
//   return javob;
// }

// console.log(ajratuvchiNatsist("m1i41i4mt"));
// console.log(ajratuvchiNatsist("MIT 31"));
// console.log(ajratuvchiNatsist("Tugadi"));



// console.log("TASK H");
// function positiveToString(arr: number[]) {
//   const positiveNumbers: number[] = arr.filter((num: number) => num > 0);
//   return positiveNumbers.join(",");
// }
// console.log(positiveToString([10, -4, 0, 23, -9, 5]));

// console.log("Task G")
// function yuqoriIndex(arr: number[]) {
//     let maxIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     return maxIndex;
// }

// console.log('================================');
// console.log("ANSWER ONE:", yuqoriIndex([5, 21, 12, 25, 8]));
// console.log("ANSWER TWO:", yuqoriIndex([5, 31, 17, 21, 0]));