const angka = [1, 2, 3, 4, 5]
const angkaBaru = [...angka, 6, 7]

const biodata = {
  nama: "Naufal",
  kampus: "UNIKOM"
}

const biodataBaru = {
  ...biodata,
  asal: "Aceh"
}

console.log(angkaBaru)
console.log(biodataBaru)