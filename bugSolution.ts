function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate over the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string[] {
  return people.map(person => "Hello, " + person);
}

console.log(greeterArray(user));

// Solution 3: Use destructuring if you only need the first element
const [firstName] = user;
console.log(greeter(firstName));