var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var angkotLembur = [8];

for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    } else if (noAngkot == angkotLembur) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.")
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
    }
}