/*Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut
merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan 
berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa
pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka
dan menghasilkan output seperti keterangan di atas.

contoh input
devideAndSort(5956560159466056)

output
55566914566956 */

function pisahAngka(num) {
  if (typeof num == "number") {
    //rubah ke string
    const str = num.toString();

    // merubah inputan string pada parameter kedalam array dengan method split
    const arrayAngka = str.split("0");
    // hasil "595656" "159466" "56"

    // split array
    for (let i = 0; i < arrayAngka.length; i++) {
      arrayAngka[i] = arrayAngka[i].split("");
    }
    // split dan join
    for (let i = 0; i < arrayAngka.length; i++) {
      arrayAngka[i] = arrayAngka[i].sort().join("");
    }

    //join
    const hasilSorting = arrayAngka.join("");
    console.log(hasilSorting);
  }
}

pisahAngka(54350765560213);
