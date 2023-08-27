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
