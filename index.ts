enum Status {
  OK,
  ERROR,
}

const message: String = "Hello World";

console.log(Status.OK, message, process.env.TEST);
