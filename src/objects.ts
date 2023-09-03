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
