var angka;

var ulang = true;

main:
while (ulang) {

    angka = prompt("Masukkan angka: ");

    if (angka % 2 == 0) {
        alert(angka + " adalah bilangan Genap");
    } else if (angka % 2 == 1) {
        alert(angka + " adalah bilangan Ganjil");
    } else {
        alert("Yang Anda masukkan bukan angka!")
    }

    ulang = confirm("apakah ingin mengulang ?");
    if (ulang == true) {
    continue main;
    } else {
        alert("Terima Kasih telah menggunakan Program kami")
        break;
    }

}


