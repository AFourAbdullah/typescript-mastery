let greetings: string = "hello";
// greetings.map()-->it will be errror

console.log(greetings);
console.log(greetings.toLowerCase());
// console.log(greetings.toLowercase());-->ts will automatically detect that function name is incorrect
let myNum: number = 6;
let myNum2: number = 6253245.3;
// myNum.toLowerCase()-->it will be error
console.log(myNum);
export {};
////it is not a good practice to assign types to variable if their values are known typescript will automatically detect the type
// let user="aziz"
// user=3 --> it will be an error b/c user variable has string type
