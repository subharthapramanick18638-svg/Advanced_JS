// a={name:"nill",address:"malda"};
// console.log(Object.keys(a));
// console.log(Object.values(a));
//-------------------------------------------------------
// let obj = {
//     name: 'Sourav',
//     age: 23,
//     gender: 'male'
// };

// Object.defineProperty(obj, 'country', {
//     value: 'India',
//     enumerable: true
// });

// console.log(obj.country); 
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

//----------------------------------------------------------

// let obj = {
//     name: 'Sourav',
//     age: 23
// };

// Object.defineProperty(obj, 'status', {
//     value: 'active',
//     writable: true,
//     configurable: false,
//     enumerable: false
// });

// delete obj.status; // Does not change due to `writable: false`
// console.log(obj.status);

//------------------------------------------------------------

// const a = { welcome: "hello" };

// const obj = Object.create(a);

// console.log(obj.welcome);

//------------------------------------------------------------

// const user = {username:"subhartha"};

// Object.defineProperty(user, "password", {
//   value: "subh123",
//   writable: true,
//   enumerable: false,
//   configurable: true
// });

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(user.password);

//-----------------------------------------------------------

// const user = {username:"subhartha"};

// Object.defineProperty(user, "password", {
//   value: "subh123",
//   writable: true,
//   enumerable: false,
//   configurable: true
// });

// delete user.password;
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(user.password);

//----------------------------------------------------------

// const person = {
//   name: "Alice",
//   age: 25
// };

// Object.freeze(person);

// person.age = 30;
// person.city = "Paris";

// console.log(person);

//----------------------------------------------------------

// const obj = { a: 1 };

// Object.seal(obj);

// console.log(Object.isSealed(obj)); 

// obj.b = 2;

// console.log(obj.b); 

// obj.a = 42;

// console.log(obj.a); //properties changed

// delete obj.a;

// console.log(obj.a); 

//--------------------------------------------------------------



