const printInfoMahasiswa = (nama, nim, prodi) => {
  console.log(`Nama: ${nama}, NIM: ${nim}, Prodi: ${prodi}`)
}

const perkalian = (a, b) => {
  return a * b;
}

const pembagian = (a, b) => a / b;

printInfoMahasiswa("Naufal", "10517095", "Sistem Informasi")
let hasilPerkalian = perkalian(10, 5)
console.log(hasilPerkalian)
let hasilPembagian = pembagian(20, 5)
console.log(hasilPembagian)