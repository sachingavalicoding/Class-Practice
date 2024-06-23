let user = "Coding Hub ";
let nums = [10, 23, 43, 23, 43];
let names = [" Sachin", "Nisha ", " Rajashri "];
let mixedArray = ["Hello", 10, true, null, " Hey Ji ", ` Hello ${user}`];
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(mixedArray);
// console.log(matrix);

// Array methods

// push and pop
// use for insert and delete element on last position

//let arr = new Array(23,43,23,23,2);
// arr.push(56);// insert element in array at last position
// console.log(arr.push(24));// print length of array
// console.log(arr);// after push final array should be print

// pop use for delete element at last position

// arr.pop();// there no any argument pass
// console.log(arr.pop());

// shift and unshift as like same just main diff is at posi start

// // splice(start  , no of ele want to remove);
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2);
// console.log(arr);


// // slice() - Returns a shallow copy of a portion of an array into a new array.
// // slice(start , end ); // work like range function it can't include end positon element and also not change new array it create an copy of exiting element 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.slice(1, 6);
// console.log(newArr); 


// // forEach() - use as loop  also map 

// nums.forEach((element) => {
//     console.log(element);
// })

// //filter() - Creates a new array with all elements that pass the condition
// let arr = [1, 2, 3, 4];
// let newArr = arr.filter(x => x % 2 === 0); 
// let newArr2 = arr.filter(x => x > 2); 
// console.log(newArr);
// console.log(newArr2);



// //concat() - Merges two or more arrays.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);
// console.log(newArr);


// //includes() - check value present in array or not 
// let arr = [1, 2, 3];
// let isPresent = arr.includes(2); 
// let isPresent1 = arr.includes(4); 
// console.log(isPresent);
// console.log(isPresent1);


// //join() - Joins all elements of an array into a string.
// let arr = [1, 2, 3];
// let str = arr.join(", "); 
// console.log(str); // string 


// //find() - Returns the value of the first element that satisfies the provided function
// let arr = [1, 2, 3, 4];
// let found = arr.find(element => element === 4); 
// console.log(found);

// // findIndex() - Returns the index of the first element that satisfies the provided testing function
// let arr = [1, 2, 3, 4];
// let index = arr.findIndex(element => element === 4); // it returns an index 
// console.log(index);


// // every() - Tests whether all elements in the array pass the test implemented by the provided function.
// let arr = [0, 2, 6, 4];
// let  checkEven = arr.every(element => element % 2 == 0 );
// console.log(checkEven) // return true or false 

// //some() - Tests whether at least one element in the array passes the test implemented by the provided function.
// let arr = [1, 2, 3, 4];
// let hasAboveThree = arr.some(element => element > 3); 