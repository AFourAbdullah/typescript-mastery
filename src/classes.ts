//in ts we also have access modifiers private public protected by default it is public
class Player {
  height;
  weight;
  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }
}
let ronaldo = new Player(6, 55);
// let ronaldo2 = new Player(true "55");-->it is wrong

//why we need private???? b/c there are some properties that should not be visible,however we can make a function to acess those properties
class Student {
  height;
  weight;
  private rollNum;
  constructor(height: number, weight: number, rollNum: number) {
    this.height = height;
    this.weight = weight;
    this.rollNum = rollNum;
  }
}
let s1 = new Student(6, 55, 59);
// console.log(s1.rollNum) -->it will give eror for accessing private properties which is only accessible inside class
