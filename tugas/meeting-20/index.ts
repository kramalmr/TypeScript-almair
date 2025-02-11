// SOAL 1
let nama : string = "Akram";
let umur : number = 15;
let isActive : boolean = true;
let hobbies : string[] = ["Tidur", "Ngegame"];

console.log(nama, umur, isActive, hobbies);

// SOAL 2

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(2, 3));

// SOAL 3

interface Mahasiswa {
    nama : string;
    umur : number;
    jurusan : string;
}

const mhs1 : Mahasiswa = {
    nama : "Akram",
    umur : 15,
    jurusan : "Teknik Informatika"
}

console.log(mhs1);


// SOAL 4

class Mobil { 
    merk : string;
    tahun : number;

    constructor(merk : string, tahun : number) {
        this.merk = merk;
        this.tahun = tahun;
    }
    info() {
        return `Merk : ${this.merk}, Tahun : ${this.tahun}`;
    }
}

const mobil1 = new Mobil("Toyota", 2022);
console.log(mobil1.info());

