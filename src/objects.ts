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
  name: string;
  price: number;
}

type createCourseFunc = (course: Course) => Course;

const createCourse: createCourseFunc = (course) => {
  console.log(course);
  return course;
};

createCourse({ name: "ts basics", price: 200 });
