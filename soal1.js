/*Buat code dari tugas Computer Science dibawah ini
Deteksi Palindrom
- Diberikan sebuah teks, periksa apakah kata tersebut adalah
palindrom atau tidak. Misalnya teks “Malam”, output =
palindrom.
Reverse Words
- Diberikan sebuah kalimat, ubah urutan kata-kata di dalam
kalimat menjadi terbalik. Misalnya kalimat “Saya belajar
Javascript”, output “Javascript belajar Saya” */

// 1a
function checkPalindrom(palindrom) {
  let a = true;
  let b = palindrom.length - 1;
  let c = b / 2;

  for (let i = 0; i < c + 1; i++, b--) {
    if (palindrom[i] != palindrom[b]) {
      a = false;
    }
  }

  if (a) {
    console.log("Kata tersebut adalah palindrome");
  } else {
    console.log("Kata tersebut bukan palindrome");
  }
}
checkPalindrom("malam");

// 1b
function reverseWord(kata) {
  // Split parameter kata per kata bukan per huruf
  let kata1 = kata.split(" ");
  // variable sementara untuk menyimpan reverse string dalam bentuk array
  let reverse = [];

  // iterate kata secara backwards menggunakan for loop
  for (let i = kata1.length - 1; i >= 0; i--) {
    // console.log([i]);
    // push kalimat baru kedalam array baru
    reverse.push(kata1[i]);
  }
  // menggabungkan array yang telah di push
  console.log(reverse.join(" "));
}

reverseWord("saya belajar javascript");
