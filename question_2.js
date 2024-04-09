const ages = [10, 78, 45, 69, 25, 41, 21, 12, 57, 13];

ages.sort((a, b) => a - b); // Step 1

const minAge = ages[0];
const maxAge = ages[ages.length - 1]; //Step-2

let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages[Math.floor(ages.length / 2) - 1];
  const mid2 = ages[Math.floor(ages.length / 2)];
  medianAge = (mid1 + mid2) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
} //Step-3

const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length; //Step-4

const ageRange = maxAge - minAge; //step-5

const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge); //step-6

console.log("Sorted Ages : ", ages);
console.log("Min Age : ", minAge);
console.log("Max Age : ", maxAge);
console.log("Median Age : ", medianAge);
console.log("Average Age : ", averageAge);
console.log("Age Range : ", ageRange);
console.log("Min-Average Difference : ", minDifference);
console.log("Max-Average Difference : ", maxDifference);

// Out is--
/*
Sorted Ages :  [
    10, 12, 13, 21, 25,
    41, 45, 57, 69, 78
  ]
  Min Age :  10
  Max Age :  78
  Median Age :  33
  Average Age :  37.1
  Age Range :  68
  Min-Average Difference :  27.1
  Max-Average Difference :  40.9
  */
