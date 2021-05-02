
/* Farklı */

var sayi = 1;

var cokOldu = setInterval(function () {
    if (sayi == 5)
        clearInterval(cokOldu);

    console.log("Çok oldu Bu: "+sayi);
    sayi++
}, 500);