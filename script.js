// ambil elemen
const teks = document.getElementById("teks");
const tombol = document.getElementById("tombol");

// ketika tombol diklik
tombol.addEventListener("click", function() {
    teks.textContent = "Teksnya sudah berubah!";
});
