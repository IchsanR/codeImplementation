/*Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut
merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan 
berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa
pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka
dan menghasilkan output seperti keterangan di atas.

contoh input
devideAndSort(5956560159466056)

output
55566914566956 */

function devideAndSort(num) {
  if (typeof num != "number") {
    console.log("Parameter harus number");
  } else {
    const str = num.toString().split("0");

    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].split("");
    }
    // console.log(str);
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].sort().join("");
    }
    // console.log(str);

    const hasilAkhir = str.join("");
    console.log(hasilAkhir);
  }
}

devideAndSort(5430234501231);
