const contactMap = new Map();
contactMap.set("Dheerendra", {
  age: 20,
  email: "dheerendra@example.com",
  location: "Bhopal",
});

contactMap.set("Baddu", {
  age: 22,
  email: "baddua@example.com",
  location: "chhatarpur",
});

contactMap.set("Pandu", {
  age: 19,
  email: "pandu@example.com",
  location: "Bhopal",
});

contactMap.set("Vinay", {
  age: 30,
  email: "vicky@example.com",
  location: "Bhopal",
});

function getContact(name) {
  return contactMap.get(name);
}
console.log(getContact("Dheerendra"));

//Output is-   { age: 20, email: 'dheerendra@example.com', location: 'Bhopal' }
