//* nesneler ile karıştırmamak gerek,
// nesneler {} diziler [] ile tanımlanır
// in this "0. 1. diye devam eder ör. 0. Semih
// *

var dizi = ["semih", 15, false, 0.3]

//console.log(dizi.length);// uzunluk verir

/* For Döngüsü İle Yazdırmak
for (var i = 0; i< dizi.length; i++){
    console.log(dizi[i]);
} */

dizi.forEach(function (k){
    console.log(k);
});

