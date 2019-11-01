class Manusia {
  constructor () {
    this.jenisKelamin = "Pria"
  }

  printJenisKelaim () {
    console.log(this.jenisKelamin)
  }
}

class Orang extends Manusia {
  constructor () {
    super()
    this.nama = "Naufal"
  }

  printNama() {
    console.log(this.nama)
  }
}

const orang = new Orang()

orang.printNama()
orang.printJenisKelaim()