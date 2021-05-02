/*
 ==  (eşit ise) string integer ayırmaz
 === (veri türü dahil eşit ise)  string integer ayırır
 != (eşit değilse)
 !== (veri türü dahil eşit değilse)
 > (büyüktür)
 < (küçüktür)
 >= (büyük eşittir)
 <= (küçük eşittir)
*/

var sayi = 2;
console.log(sayi== 2);

var sayi = 2;
console.log(sayi== 3);

var sayi = 2;
console.log(sayi== "2"); //String ve İnteger Farketmiyor,
                        // Her halükarda true verir//

var sayi = 2;
console.log(sayi === "2"); // Veri Türü Ayırdı //


console.log(3 > 3)
console.log(3 >= 3)  //eşit veya daha büyükse demek
console.log(3 >= 4)  //eşit veya daha büyükse demek
console.log(3 <= 4)  //eşit veya daha küçükse demek


