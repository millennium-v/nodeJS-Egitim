/*
const arr = ['foo', 'bar', 'xyz'];
console.log(...arr);
*/

/*
const arr = [1,2,3];
const arr2 = [...arr,3,4,5];

console.log(arr2);
*/
const arr = ['a','b','c','d'];
const [deger1, ...rest] = arr;
console.log(...rest);
