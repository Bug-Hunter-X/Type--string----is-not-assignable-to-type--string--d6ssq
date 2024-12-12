function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //This will give an error because the function expects a string, not an array of strings.