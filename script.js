// Bagian A: tabel perkalian dengan for
function buatTabelPerkalian(n) {
let isi = "<tr><th>Operasi</th><th>Hasil</th></tr>";
let i =1;
while (i <= 10) {
    let hasil = n *i;
    if (hasil % 2 === 0) {
        isi += `<tr style="background: #ddd;"><td>${n} × ${i}</td><td>${hasil}</td></tr>`;
    } else {
        isi += `<tr><td>${n} × ${i}</td><td>${hasil}</td></tr>`;
    }
    i++;
}
document.getElementById("tabelKali").innerHTML = isi;
}
document.getElementById("buat").addEventListener("click", function () {
buatTabelPerkalian(Number(document.getElementById("angka").value));
});
buatTabelPerkalian(7); // tampilan awal
// Bagian B: array of object dengan for...of
const mataKuliah = [
{ kode: "IF201", nama: "Pemrograman Web", sks: 3 },
{ kode: "IF202", nama: "Basis Data", sks: 3 },
{ kode: "IF203", nama: "Sistem Operasi", sks: 3 },
{ kode: "IF204", nama: "Statistika", sks: 2 },
{ kode: "IF205", nama: "Algoritma dan struktur data ", sks: 3 },
{ kode: "IF206", nama: "Pemrograman Berorientasi objek ", sks: 3 }

];
let baris = "<tr><th>No</th><th>Kode</th><th>Mata Kuliah</th><th>SKS</th></tr>";
let total = 0;
let no = 1;
for (const mk of mataKuliah) {

baris += `<tr><td>${no}</td><td>${mk.kode}</td>
<td>${mk.nama}</td><td>${mk.sks}</td></tr>`;
total += mk.sks;
no++;
}
document.getElementById("tabelMK").innerHTML = baris;
document.getElementById("totalSks").textContent = `Total SKS: ${total}`;
