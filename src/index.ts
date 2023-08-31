// let a = 727;
// a="sad"
// string can not be assigned to number type still it will be compiled for js in dist folder

// let a:string
// let b:number
// let c:boolean

// another way to declare is
// let a=<number>5
// let ab = <string>5;-->it will throw type error
// let abc = <string>":hello"

// //union types
// let a: string | number | boolean = 3;
// console.log(a);
// a = "hello";
// console.log(a);
// a = true;
// console.log(a);

//function void
// const a=(m:number,n:number)=>{
// console.log(n,m)
// }
// a(1,2)

//function returning number with
// const b=(m:number,n:number)=>{
// return(n*m)
// }
// b(1,2)

//function returning string after typecasting with
// const c=(m:number,n:number)=>{
// return String(m*n)
// }
// c(1,2)

//function returning number with explicit defining return type
// const b=(m:number,n:number):number=>{
// return(n*m)
// }
// b(1,2)

//function returning string after typecasting with explicit defining return type
// const c=(m:number,n:number):number=>{
// return String(m*n)--> it will give error because return type is defined as number
// }
// c(1,2)

//we cam define type of a function then reuse it anywher
// type funcType = (n: number, m: number) => number;
// const func: funcType = (n, m) => {
//   return n * m;
// };

//*********************ARRAYs***********************/
// const a=[1,"s",false]-->this will automatically detect array;s type
// const a: number[] = [1, 2]; //we can not give any other items except number
// const b: string[] = ["1,2"]; //we can not give any other items except number

// //another way of arrays prefered mostly
// const a:Array<string>=["hello","hasdfka"]

// const a:Array<string>=new Array(20)-->size of array a is 20
// a.push("hel","h1l2");

// const b: Array<number> = [1,2];
// const c: Array<number|string> = [1, 2,"hello"];
// c.push(true)--> it will give error b/c c can only have numbers and strings

// // if an array of any type is looped or its element are acessed then vs code inteliisense will give methods of type of the elements in aray
// const a:string[]=["he;;p"]
// a.forEach((i)=>i.includes(";"))

//*********************OBJECTs***********************/

//it will detect types of keys on its own
// const a={
//     height:4,weight:60
// }

// type OBJ={
//    name:string,age:number,isAdult:boolean
// }-->any object beloging to this type will require all keys and their values
// const u1:OBJ={
//     name:"",age:8,isAdult:true
// }

// type OBJ2={
//    name:string,age:number,isAdult?:boolean
// }-->any object beloging to this type will not require all keys and their values
// const u1:OBJ2={
//     name:"",age:8,
// }

// //interfaces are similar to object but they can be extended to inerit other interfaces
// interface i1 {
//   name: string;
//   age: number;
//   isAdult: boolean;
// }
// // interface i2 extends i1 {}

// // const ii: i2 = {
// //   name: "s",
// //   age: 1,
// //   isAdult: true,
// // };

// type funcType = (a: number, n: number) => number;
// interface i3 extends i1 {
//   degree: string;
//   func?: (n: number, m: number) => void;
//   func1?: funcType;
// }

// const ii: i3 = {
//   name: "s",
//   age: 1,
//   isAdult: true,
//   degree: "BE",
//   func: (n, m) => {
//     console.log(1 * 2);
//   },
//   func1: (a, b) => {
//     return a + b;
//   },
// };

//*********************FUNCTIONs***********************/
// type FUNCTYPE = (n: number, m: number, l?: number) => number;
// const func: FUNCTYPE = (n, m, l) => {
//   if (typeof l == "undefined") return n * m;
//   return n * m * l;
// };
// func(1, 2);
// func(1, 2, 2);

// //we can give default value to variable
// type FUNCTYPE = (n: number, m: number, l: number) => number;
// const func: FUNCTYPE = (n, m, l = 20) => {
//   if (typeof l == "undefined") return n * m;
//   return n * m * l;
// };
// func(1, 2, 2);

//if we don't define type
// const func = (n: number, m: number, l: number = 20) => {
//   if (typeof l == "undefined") return n * m;
//   return n * m * l;
// };-->if we dont define return type it will automatically detect it
// func(1, 22, 3);
