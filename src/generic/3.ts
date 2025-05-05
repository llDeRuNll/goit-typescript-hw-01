// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const objA = { name: "John", age: 30 };
const objB = { job: "Developer", location: "Kyiv" };

const merged = merge(objA, objB);
console.log(merged.name);
console.log(merged.job);
