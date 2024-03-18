// function Auto(puertas, marca, color, llantas) {
//     this.puertas = puertas;
//     this.marca = marca;
//     this.color = color;
//     this.llantas = llantas;
//     this.informacion = function() {
//         console.log("este es un " + this.marca + " de color " + this.color)
//     }
// }



class Auto2 {
    constructor(puertas, marca, color, llantas, año) {
    this.puertas = puertas;
    this.marca = marca;
    this.color = color;
    this.llantas = llantas;
    this.año = año;
    }
    info() {
        console.log("este es un " + this.marca + " de color " + this.color + " del año " + this.año)
    }
}

var miOtroAuto = new Auto2(10, "audi", "blanco", 6, 2022)

miOtroAuto.info()

// console.log(miOtroAuto)
// console.log(miOtroAuto.marca)