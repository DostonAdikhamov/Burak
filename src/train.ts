console.log("TASK - ZI");
function delayHelloWorld(text: string): void {
  setTimeout((): void => {
    console.log(text);
  }, 3000);
}
delayHelloWorld("Hello World!");

// console.log("TASK - ZH");
// function findDisappearedNumbers(arr: number[]): number[] {
//   const result: number[] = [];
//   const max = Math.max(...arr);
//   const set = new Set(arr);

//   for (let i = 1; i <= max; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7, 25]));

// console.log("TASK ZG");
// function toSnakeCase(str: string): string {
//   return str
//     .trim()
//     .toLowerCase()
//     .split(/\s+/)
//     .join("_");
// }

// console.log(toSnakeCase("name should be a string"));

// console.log("TASK - ZF");
// function capitalizeWords(str: string): string {
//   return str
//     .split(" ")
//     .map(word => {
//       if (word.length <= 2) {
//         return word; 
//       }
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
// console.log(capitalizeWords("name should be a string"));
// console.log(capitalizeWords("endi qanday bo'lyapti a?"));

// console.log("TASK - ZE");
// function removeDuplicate(str: string): string {
//   let result = "";
//   for (const char of str) {
//     if (!result.includes(char)) {
//       result += char;
//     }
//   }
//   return result;
// }

// console.log(removeDuplicate("stringg"));  
// console.log(removeDuplicate("aabbcc"));   
// console.log(removeDuplicate("Assalomu aleykum"));    
// console.log(removeDuplicate("hello"));    

// console.log("TASK - ZD");
// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//   if (index < 0 || index >= arr.length) {
//     throw new Error("Index out of range");
//   }

//   const updatedArr = [...arr]; 
//   updatedArr[index] = newValue;
//   return updatedArr;
// }
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 5));
// console.log(changeNumberInArray(2, [10, 20, 30, 40], 99)); 

// console.log("TASK - ZC");
// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(0));   
// console.log(celsiusToFahrenheit(10));  
// console.log(celsiusToFahrenheit(100)); 

// console.log("Task - ZA");
// function sortByAge(arr: { age: number }[]): { age: number }[] {
//   return arr.sort((a, b) => a.age - b.age);
// }
// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

// console.log("TASK - Z");
// function sumEvens(arr: number[]): number {
//   return arr
//     .filter(num => num % 2 === 0) 
//     .reduce((sum, num) => sum + num, 0); 
// }
// console.log(sumEvens([1, 2, 3]));      
// console.log(sumEvens([1, 2, 3, 4, 6])); 

// console.log("TASK - Y");
// function findIntersection(arr1: any[], arr2: any[]): any[] {
//   return arr1.filter(item => arr2.includes(item));
// }
// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// console.log("TASK - X")
// function countOccurrences(obj: Record<string, any>, key: string): number {
//   let count = 0;
//   for (const prop in obj) {
//     if (prop === key) count++;
//     const value = obj[prop];
//     if (typeof value === "object" && value !== null) {
//       count += countOccurrences(value, key); // rekursiv chaqiriq
//     }
//   }
//   return count;
// }
// console.log(countOccurrences(
//   { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//   "model"
// ));

// console.log("TASK - W");
// function chunkArray(arr: any[], size: number): any[][] {
//   const natija: any[][] = [];
//   for (let i = 0; i < arr.length; i += size) {
//     natija.push(arr.slice(i, i + size));
//   }
//   return natija;
// }

// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 2));
// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));
// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 4));

// console.log("TASK - V");
// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};
//   for (const char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// }
// console.log(countChars("Assalomu aleykum!"));

// console.log("TASK-U");
// function toqSon(num: number): number {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) count++;
//   }
//   return count;
// }
// console.log(toqSon(10));   
// console.log(toqSon(25));  

// console.log("TASK - T")
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const merged = [...arr1, ...arr2];     
//   return merged.sort((a, b) => a - b);   
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// console.log("TASK - S");
// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   const yigindi = (n * (n + 1)) / 2;  
//   const umumiy = arr.reduce((sum, num) => sum + num, 0);
//   return yigindi - umumiy;
// }
// console.log(missingNumber([3, 0, 1])); 
// console.log(missingNumber([0, 1]));   
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); 

// console.log("TASK - R");
// function hisobla(str: string): number {
//   const [a, b] = str.split("+").map(Number);
//   return a + b;
// }
// console.log(hisobla("17+3"));  
// console.log(hisobla("15+25")); 

// function hasProperty(obj: Record<string, any>, key: string): boolean {
//   return obj.hasOwnProperty(key);
// }
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  

// console.log("TASK - P");
// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// console.log("TASK - O");
// function harQandayYigindi(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }
//   return sum;
// }
// console.log(harQandayYigindi([12, "15", { son: 10 }, true, 35]));

// console.log("TASK - N");
// function palindromTekshiruv(str: string): boolean {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
//   const reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// };

// console.log(palindromTekshiruv("dad")); 
// console.log(palindromTekshiruv("non")); 
// console.log(palindromTekshiruv("Mashina")); 


// console.log("TASK-M");
// function kvadrat(numbers: number[]): { raqam: number, kvadrati: number }[] {
//     return numbers.map(num => ({
//        raqam: num,
//         kvadrati: num * num
//     }));
// }

// console.log(kvadrat([9, 25, 13]));

// console.log("TASK L");
// function reverseSentence(str: string): string {
//   return str
//     .split(" ") 
//     .map(word => word.split("").reverse().join("")) 
//     .join(" "); 
// }

// console.log(reverseSentence("eW ekil !gnidoc"));
// console.log(reverseSentence("elaQ ?isaka !imitbaqhs'O"));


// console.log("TASK K");
// function unlilar(str: string): number {
//   const vowels: string = "aeiouAEIOU";
//   let count: number = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(unlilar("Education"));  
// console.log(unlilar("Uzbekistan")); 


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