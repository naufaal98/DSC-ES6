const angka = [1, 2, 3, 4, 5]

const multiplyAngka = angka.map(num => {
  return num * 2
})

console.log(multiplyAngka)

const filterAngkaGanjil = angka.filter(num => {
  return num % 2 === 1
})

console.log(filterAngkaGanjil)