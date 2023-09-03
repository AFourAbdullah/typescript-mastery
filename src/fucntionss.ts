// function addTwo(num1:number){
// return num1+5
// }
// addTwo("2") it will be an error
// addTwo(2) it will not be an error
//default values
// const loginUser=(email:string,password:string,isPaid:boolean=false)=>{

// function add(num:number){
//     return "hello"
// } the return type of fucntion is now string so passing numbers and performing mathematical operations will be a problem
// add(5)
// }
// loginUser("jeff","jeff@g.com") it will not give error for the default value if we didnt pass the argument
// loginUser("jeff","jeff@g.com",true) it will also not give error and will work correctly
//defining types for function
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

//rest operator to pass many arguments as we want:

// const func = (...n: number[]) => {
//   return n;
// };-->this will return number array and on n we can access array methods
// func(1, 22, 3, 3, 23, 245, 234534, 3246);

// type FUNCTYPE = (...n: number[]) => number[];
// const func:FUNCTYPE = (...n) => {
//   return n;
// };-->this will return number array and on n we can access array methods
// func(1, 22, 3, 3, 23, 245, 234534, 3246);

// type FUNCTYPE = (...n: number[]) => number;
// const f1:FUNCTYPE=function(n:number){
//     return n
// }

const heros = ["ironman", "batman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMSg: string) {
  console.log(errMSg);
}

//some functions never return a value
function throwError(errMSg: string): never {
  throw new Error(errMSg);
}
