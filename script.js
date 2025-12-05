const tombolA = document.getElementById("tombolA");
const tombolB = document.getElementById("tombolB");
const teks = document.getElementById("teks");

tombolA.addEventListener("click", function () {
  teks.textContent = "Halo, saya belajar JavaScript!";
});

tombolB.addEventListener("click", function () {
  teks.textContent = "Saya semangat latihan!";
});
