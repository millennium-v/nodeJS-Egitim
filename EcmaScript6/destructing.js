/*
es6'dan önce
 */

/*
var degerler = {
    deger1: 'deger1',
    deger2: 'deger2',
    deger3: 'deger3',
};
*/

/*
var deger1 = degerler.deger1;
var deger2 = degerler.deger2;

console.log(deger1, deger2);
*/

/*
es6'dan sonra
 */
/*

const {deger1, deger2, deger3, deger5 = 'deger5'} = degerler;
console.log(deger1, deger2);
console.log(deger3);
console.log(deger5);
*/

const degerler = [1,2,"semih"];
const [deger1, deger2, degersiz] = degerler;
console.log(deger1);
console.log(deger2);
console.log(degersiz);

console.log(degersiz);