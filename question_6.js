function displayInfo(name, role) {
  console.log("Name: " + name + "," + "Role :" + role);
}
displayInfo.call(null, "Dheerendra", "Developer");
displayInfo.apply(null, ["Shashwat", "SDE"]);
function greet() {
  console.log("Hello ," + this.name);
}
const user = { name: "PK" };
const boundGreet = greet.bind(user);
boundGreet();

/** question_6.js
Name: Dheerendra,Role :Developer
Name: Shashwat,Role :SDE
Hello ,PK */
