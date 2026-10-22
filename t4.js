//Part 1: Array Manipulation Methods
//1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
// let fruits=["apple","mango","avacardo","pineapple","watermelon"];
// fruits.push("potato","guava","muskmelon");
// console.log(fruits);

//2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
// let num=[1,2,3,4,5,6];
// num.pop();
// console.log(num);

//Create an array of 5 names. Remove the first element using shift() and print the array.
// let name=["aaa","bbb","ccc","ddd","fff"];
// name.shift();
// console.log(name);

//4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
// let num1=[30,40,50,60];
// num1.unshift(10,20);
// console.log(num1);

//5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
// let arr = [10, 20, 30, 40, 50];
// arr.splice(1,2);
// console.log(arr);

//6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2,1,100);
// console.log(arr);

//7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
// let arr = [1, 2, 3, 4, 5];
// arr.fill("hello",2,5);
// console.log(arr);

//Part 2: Array Merge and Search Methods
//8. Create two arrays of numbers and combine them using concat().
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=arr1.concat(arr2);
// console.log(arr3);

//9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
// let arr = [10, 20, 30, 40, 50, 60];
// let arr2=arr.slice(1,5);
//  console.log(arr2);

//10. Create a nested array and convert it into a single-level array using flat(Infinity).
// let nested1=[1,2,[3,4,[5,6,[7]]]];
// console.log(nested1.flat(Infinity));

//11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.includes(30));

//12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
// let arr = [5, 10, 15, 20, 25];
// console.log(arr.indexOf(20));

//13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
// let arr = [1, 2, 3, 2, 1, 2];
// console.log(arr.lastIndexOf(2));

//14. Create an array of numbers and arrange its elements using sort().
// let arr =[2,1,4,3,5];
// console.log(arr.sort());

//15. Create an array of 7 numbers and reverse the order using reverse().
// let arr =[1,2,3,4,5,6,7];
//  console.log(arr.reverse());

//Part 3: Spread and Rest Operators
//16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
// let arr1=[1,2,3,7];
//  let arr2=[4,5,6,8];
//  let arr3=[...arr1,...arr2];
//  console.log(arr3);

//17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.

// let stud={name:"sachin",age:22};
// let job={company:"stackly",joined:2026};
// let arr={...stud,...job};
// console.log(arr);

//18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
// function add(a,b,...c){
//     console.log(a);
//     console.log(b);
//      console.log(c);
// }
// add(10,20,30,40,50);

//19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
// function one(a, b, ...c) {
 
//     console.log(a+b+c[0]+c[1]);
// }                                                       
// one(10,20,30,40,50);

//20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
// let arr1=[1,2,3,7];
//  let arr2=[4,5,6,8];
//  let arr3=[...arr1,...arr2];
//  console.log(arr3);

//Part 4: Array Destructuring
//21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
//  let arr = [10, 20, 30, 40];
//  let [a,b,c,d]=arr;
//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);

 //22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
//  let nested = [1, 2, [3, 4, [5, 6]]];
//     let [a,b,[c,d,[e,f]]]=nested;
//     console.log(a,b,c,d,e,f);/

//23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
// let student=["sachin",22,8.1];
// let[name,age,cgpa]=student;
// console.log("name",name);
// console.log("age",age);
// console.log("cgpa",cgpa);/


//Part 5: Object Destructuring
//24. Create an object containing name, role, and location. Extract these properties using object destructuring.
// let employee={name:"sachin",role:"developer",place:"bangalore"};
// const{name,role,place}=employee;
// console.log("Name",name);
// console.log("Role",role);
// console.log("Location",place);

//25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
// let obj={name:"sachin",
//     address:{
//     city:"tiruppur",
//     state:"tn"
// }
// };
// const{address:{city,state}}=obj;
// console.log("25->City:",city,"State",state);

//26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
// let emp = {
//   name: "sachin",
//   role: "developer",
//   place: {
//     mainLocation: "Tirupur",
//     currentLocation: "Bangalore"
//   }
// };
// const { name, role, place: { mainLocation, currentLocation } } = emp;
// console.log("26 ->", name, role, mainLocation, currentLocation);

//Part 6: Mixed Practical Challenges
//27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
// let nums = [1,2,3,4,5,6,7,8,9,10];
// nums.splice(0, 1); 
// nums.splice(-1, 1); 
// nums.splice(0, 0, 100, 101); 
// console.log(nums);

//28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
// let numbers = [10, 20, 30, 20, 40, 20];
// let check = 20;
// console.log(numbers.includes(check));
// console.log(numbers.indexOf(check));
// console.log(numbers.lastIndexOf(check));

//29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
// let obj1 = { name: "sachin", age: 22 };
// let obj2 = { role: "developer", city: "Bangalore" };
// let merged = { ...obj1, ...obj2 };
// let { name, role } = merged;
// console.log(name, role);

//30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
// let arr = [1, [2, 3], [4, [5, 6, [7]]], 8];
// let result = arr.flat(Infinity).reverse();
// console.log(result);



