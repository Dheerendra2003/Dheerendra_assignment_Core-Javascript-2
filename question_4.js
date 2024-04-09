const person1 = { name: "Dheerendra", age: 20 };
const person2 = { name: "Baddu", age: 21 };

function introduce() {
  console.log(
    "Hello, I'm " + this.name + ", and I'm " + this.age + "   years old."
  );
}
introduce.call(person2);

//Output is-   Hello, I'm Baddu, and I'm 21   years old.
