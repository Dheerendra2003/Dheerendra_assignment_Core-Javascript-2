let uniqueNumbers = new Set([5, 6, 8, 7, 6, 1, 4]);

let numberSquareMap = new Map();
uniqueNumbers.forEach((number) => {
  numberSquareMap.set(number, number * number);
});
console.log("Unique Numbers : ");
console.log(Array.from(uniqueNumbers).join(","));
console.log("\nNumber-Square Map :");
numberSquareMap.forEach((square, number) => {
  console.log(number + square);
});

/**Unique Numbers : 
5,6,8,7,1,4

Number-Square Map :
30
42
72
56
2
20 */
