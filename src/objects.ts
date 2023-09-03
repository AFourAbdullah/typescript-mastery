const User = {
  name: "Abdullah",
  age: 20,
  isActive: true,
};
type Users = {
  name: string;
  email: string;
  isPaid: boolean;
};

function createUser(user: Users) {
  console.log(user);
}
createUser({ name: "ABdullah", isPaid: true, email: "abc@gmail.com" });

function createProduct(product: {
  name: string;
  stock: number;
  isAvailable: boolean;
}) {
  console.log(product);
}
createProduct({ name: "Product1", isAvailable: true, stock: 300 });
const productMker: createProductFunc = function createProduct(product) {
  console.log(product);
};
console.log(productMker({ name: "p1", isAvailable: false, stock: 33 }));

type createProductFunc = (product: {
  name: string;
  stock: number;
  isAvailable: boolean;
}) => void;

interface Course {
  readonly id: string;
  name: string;
  price: number;
}

type createCourseFunc = (course: Course) => Course;

const createCourse: createCourseFunc = (course) => {
  course.name = "default course";
  // course.id="sdfsd"-->it will give error b/c id is readonly
  console.log(course);
  return course;
};

createCourse({ id: "c1", name: "ts basics", price: 200 });

type ThemeMode = "light" | "dark";
const theme: ThemeMode = "dark";
// const theme2: ThemeMode = "dad";--> it will give errror
