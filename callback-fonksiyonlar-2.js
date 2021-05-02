function birinci(callback) {
    setTimeout(function () {
        console.log("birinci");
        callback(ucuncu);
    }, 1000)
}
function ikinci(callback) {
    setTimeout(function () {
        console.log("ikinci");
        callback();
    }, 1000);
}


function ucuncu() {
    setTimeout(function (){
        console.log("ucuncu")
    }, 1000);

}

birinci(ikinci);





