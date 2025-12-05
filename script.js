const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

document.getElementById("tambah").addEventListener("click", function () {
  hasil.textContent = Number(angka1.value) + Number(angka2.value);
});

document.getElementById("kurang").addEventListener("click", function () {
  hasil.textContent = Number(angka1.value) - Number(angka2.value);
});

document.getElementById("kali").addEventListener("click", function () {
  hasil.textContent = Number(angka1.value) * Number(angka2.value);
});

document.getElementById("bagi").addEventListener("click", function () {
  if (Number(angka2.value) === 0) {
    hasil.textContent = "Tidak bisa membagi 0";
  } else {
    hasil.textContent = Number(angka1.value) / Number(angka2.value);
  }
});
document.getElementById("reset").addEventListener("click", function () {
  angka1.value = "";
  angka2.value = "";
  hasil.textContent = "0";
});
