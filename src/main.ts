import { Somador, Subtrador, Multiplicador, Divisor } from "./Calculos/calculos";

let soma = new Somador()
let subtracao = new Subtrador()
let multiplicacao = new Multiplicador()
let divisao = new Divisor()

console.log('CÁLCULOS')
console.log(`A soma de 2 + 2 é: ${soma.calcular(2, 2)}`)
console.log(`A subtração de 6 - 3 é: ${subtracao.calcular(6, 3)}`)
console.log(`A multiplicação entre 2 e 2 é: ${multiplicacao.calcular(2, 2)}`)
console.log(`A divisão entre 6 e 2 é: ${divisao.calcular(6, 2)}`)