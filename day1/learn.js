// basics 
console.log(1);
console.log(2);
console.log(1+2);

// variable - a variable is simply hte name of a storage location
a = 10 ; // a is a reference variable thats stores the address of the variable in the memory
console.log(a);
b = 5;
console.log(b);
name = "tony";
console.log(name);
console.log(a+b);

// data types 
// primitive - number,boolean,string,undefined,NULL,bigint,symbol
console.log(typeof a);
console.log(typeof name);
isAdult = true;
console.log(typeof isAdult);
isFollow = false;
console.log(typeof isFollow);

// numbers - +ve,-ve,integers,floating numbers - with decimal
n = 4;
m = -5;
console.log(typeof m);

// operations in js
 l = 10;
 k = 20;

console.log(l+k);
console.log(l*k);
console.log(l-k);
console.log(l/k);
console.log(a**b);
console.log(l%k);

// NaN in JS - the nan global property is value representing not-a-number
console.log(0/0);
NaN - 1;
NaN * 1;
NaN + NaN; // it's a number but not a valid number

// operator precedence - this is the general order of solving an expression
// order - () - ** - *,/,% - +,-

// let keyword - syntax of declaring variables
let age = 18;
age = age + 1;
console.log(age);
let cgpa = 9.0;
console.log(cgpa);

// const keyword - can't be changed with re-assginment
const num = 5;
console.log(num);
// const = 6; will show error

// var keyword - old syntax of writing variables same as let but changes in scope

var age1 = 19;

// assignment operators - a = b b's value is assigning to a
age+=2;
console.log(age);
age-=2;
console.log(age);
// unary operators
// increment , decrement age++,++age,age--,--age (pre and post)
//post shows the value and then increments it in pre it does directly increment
console.log(age++);
console.log(age);

// boolean
let age2 = 14;
ismature = false;
console.log(ismature);

// string
let n1 = 'tony stark';
const w = 'dayum';
let char = 'aviolli'

// string indices
console.log(n1[0]);
console.log(n1.length);
console.log(n1[n1.length-1]);

// null & undefined
// undefined - a variable that has not been defined
// null - intentionally putting nothing explicit to be assigned
let qoq;
let q = null;
