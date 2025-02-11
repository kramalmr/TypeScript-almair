// SOAL 1
let nama = "Akram";
let umur = 15;
let isActive = true;
let hobbies = ["Tidur", "Ngegame"];
console.log(nama, umur, isActive, hobbies);
// SOAL 2
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
const mhs1 = {
    nama: "Akram",
    umur: 15,
    jurusan: "Teknik Informatika"
};
console.log(mhs1);
// SOAL 4
class Mobil {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun;
    }
    info() {
        return `Merk : ${this.merk}, Tahun : ${this.tahun}`;
    }
}
const mobil1 = new Mobil("Toyota", 2022);
console.log(mobil1.info());
//# sourceMappingURL=index.js.map