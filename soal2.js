/* Buatlah Flowchart dan Code untuk soal dibawah ini:

Demy membeli makanan menggunakan aplikasi PijarFood.
Dimana terdapat 2 buah kode promo:
- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal
50rb akan mendapat diskon 50%, dengan maksimal
potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan
minimal 25rb akan mendapatkan diskon 60%, dengan
maksimal potongan sebesar 30rb.
- Jika tidak menggunakan kode promo ‘false’

Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
dan setiap satu kilometer selanjutnya dikenakan penambahan
3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari
harga makanan yang dipesan (true), jika tidak dikenakan pajak
(false).

TASK
- Buatlah flowchart untuk membuat fungsi dari cerita diatas.
- Buatlah sebuah function yang menerima 4 parameter.
PijarFood(harga, voucher, jarak, pajak)

Example:
Input: PijarFood(75000, ‘PIJARFOOD5’, 5, true)
Output :
Harga : 75000
Potongan : 37500
Biaya Antar : 14000
Pajak : 3750
SubTotal : 55250 */

function pijarFood(harga, voucher, jarak, pajak) {
  let a = harga;
  let b = voucher;
  let c = jarak;
  let d = pajak;

  if (
    typeof a != "number" ||
    typeof b != "string" ||
    typeof c != "number" ||
    typeof d != "boolean"
  ) {
    console.log("Tipe data harus sesuai");
  } else {
    // biaya antar yang di ambil dari variable jarak
    const biayaAntar = () => {
      let minJarak = 2;
      let hSJarak = 3000;
      let tHarga = 0;

      if (c <= minJarak) {
        tHarga = 5000;
      } else {
        for (let i = 1; i <= c - minJarak; i++) {
          tHarga = i * hSJarak + 5000;
        }
      }
      return tHarga;
    };

    // set diskon
    let diskon = 0;
    const disc = () => {
      if (b == "PIJARFOOD5") {
        if (a >= 50000) {
          diskon = 0.5;
        } else {
          diskon = 0;
        }
      }
      if (b == "DITRAKTIRPIJAR") {
        if (a >= 25000) {
          diskon = 0.6;
        } else {
          diskon = 0;
        }
      }
      return diskon;
    };

    // total diskon
    const psDis = () => {
      let potongan = a * disc();
      return potongan;
    };

    // harga setelah diskon
    const promo = () => {
      let p = psDis();
      if (p == 0) {
        p;
      } else {
        p = a - p;
      }
      return p;
    };

    // harga dari voucher
    const hVch = () => {
      let x = 50000;
      let z = 30000;
      let y = promo();
      if (b == "PIJARFOOD5") {
        if (y > x) {
          y = x;
        } else {
          y;
        }
      }
      if (b == "DITRAKTIRPIJAR") {
        if (y > z) {
          y = z;
        } else {
          y;
        }
      }

      return y;
    };

    // pajak
    const pjk = () => {
      let sPjk = 0;
      if (d === true) {
        sPjk = a * 0.05;
      } else {
        sPjk = a * 0;
      }
      return sPjk;
    };

    let subtotal = a + biayaAntar() + pjk() - hVch();

    console.log(
      `Harga = ${a}
    potongan = ${hVch()}
    biaya antar = ${biayaAntar()}
    pajak = ${pjk()}
    subtotal = ${subtotal}`
    );
  }
}

pijarFood(50000, "PIJARFOOD5", 5, true);
