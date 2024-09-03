import { Stack } from "./Stack.js" // name exports
// import * as x  from "./Stack.js" this is meaning storing the class stack in x which is again an object so it is taking as the whole class stack in x object as nested object. Usually, these kind of imports are used for multiple objects. so here in this case we use the above as name
// const stack = new x.Stack() we need to instanzing the object then * import works else it throws an error
 // import Stack from "./Stack.js" // this is used for default exports and use the default at the import statement

 const stack = new Stack();
 stack.push(10);
 stack.push(20);
 stack.push(30);
 console.log(stack.peek()); // Expected output: 30
 console.log(stack.pop());  // Expected output: 30
 console.log(stack.peek()); // Expected output: 20
 console.log(stack.isEmpty()); // Expected output: false
 console.log(stack.size()); // Expected output: 2
 stack.clear();
 console.log(stack.isEmpty()); // Expected output: true