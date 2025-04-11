"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = exports.Multiplicador = exports.Subtrador = exports.Somador = void 0;
class Somador {
    calcular(numero1, numero2) {
        return numero1 + numero2;
    }
}
exports.Somador = Somador;
class Subtrador {
    calcular(numero1, numero2) {
        return numero1 - numero2;
    }
}
exports.Subtrador = Subtrador;
class Multiplicador {
    calcular(numero1, numero2) {
        return numero1 * numero2;
    }
}
exports.Multiplicador = Multiplicador;
class Divisor {
    calcular(numero1, numero2) {
        return numero1 / numero2;
    }
}
exports.Divisor = Divisor;
