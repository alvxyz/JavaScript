// var angka = parseInt(prompt("Masukkan angka yang Anda inginkan: "));

// switch (angka) {
//     case 1:
//         alert('Anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('Anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('Anda memasukkan angka 3');
//         break;
//         1
//     default:
//         alert('Angka yang Anda Masukkan salah!!!');
//         break;
// }

var item = prompt('masukkan nama makanan / minuman: \n(contoh: nasi, daging, hotdog, burger, softdrink, susu)');

switch (item) {
    case 'nasi':

    case 'daging':

    case 'susu':
        alert('makanan / minuman sehat!');
        break;

    case 'hotdog':

    case 'burger':

    case 'softdrink':
        alert('makanan / minuman tidak sehat!');
        break;

    default:
        alert('makanan / minuman yang Anda masukkan tidak terdaftar');
        break;
}