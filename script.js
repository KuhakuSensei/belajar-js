const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

function getVals() {
  const a = parseFloat(angka1.value);
  const b = parseFloat(angka2.value);
  return {
    a: isNaN(a) ? null : a,
    b: isNaN(b) ? null : b
  };
}

function show(value) {
  // jika value adalah angka, tampilkan dengan maksimal 10 digit signifikan
  if (typeof value === "number" && isFinite(value)) {
    hasil.textContent = String(+value.toFixed(10)).replace(/\.?0+$/, "");
  } else {
    hasil.textContent = String(value);
  }
}

document.getElementById("tambah").addEventListener("click", function () {
  const {a,b} = getVals();
  if (a === null && b === null) return show("0");
  show((a||0) + (b||0));
});

document.getElementById("kurang").addEventListener("click", function () {
  const {a,b} = getVals();
  if (a === null && b === null) return show("0");
  show((a||0) - (b||0));
});

document.getElementById("kali").addEventListener("click", function () {
  const {a,b} = getVals();
  if (a === null && b === null) return show("0");
  show((a||0) * (b||0));
});

document.getElementById("bagi").addEventListener("click", function () {
  const {a,b} = getVals();
  if (b === 0) return show("Tidak bisa membagi 0");
  if (a === null && b === null) return show("0");
  show((a||0) / (b||0));
});

document.getElementById("reset").addEventListener("click", function () {
  angka1.value = "";
  angka2.value = "";
  show(0);
});

// Optional: tekan Enter di salah satu input akan lakukan penjumlahan
[angka1, angka2].forEach(el =>
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("tambah").click();
  })
);
