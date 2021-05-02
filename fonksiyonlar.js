/*
function ikiEkle() {
    console.log("test fonksiyon");
}

ikiEkle();

*/

function ikiEkle(sayi) {
  console.log(sayi)
}

ikiEkle(5);


/* Varsayılan Parametre */
function adSoyad (ad, soyad){
  return ad + " " + soyad;
}
console.log("semih", "çelik");

/* Değişken olarak Tanımlama */

var fonksiyon = function () {
  console.log("javascript");
};
  
fonksiyon();

/* TamSayı İle Aynısı */
var fonksiyon = function () {
  return 2+65;
};

console.log(fonksiyon())

