/*
    && (ve) - Her durumun true olması durumunda true yapar -
    || (veya) - Herhangi bir ifadenin true olması ifadenin genelini true yapar-

 */

console.log(1 < 4 && 2===2 ); // ve kesin ifade, 1 yanlış hepsini siler
console.log(1 < 4 || 2===4 ); //veya bir tane doğru istiyor
console.log(1 < 4 && 2===4 );



var sayi1 = 1,
    sayi2 = 2,
    sayi3 = 3;

console.log( (sayi1 == 1) && (sayi2 == 2) && (sayi3 == 3) );



var sayi1 = 1,
    sayi2 = 2,
    sayi3 = 3;

var durum = ( (sayi1 == 2) || (sayi2 == 2) && (sayi3 == 3) );

console.log(durum)

var sayi1 = 1,
    sayi2 = 2,
    sayi3 = 3;

var durum = ( (sayi1 == 2 || sayi2 == 2) && (sayi3 == 3) );

console.log(durum)
