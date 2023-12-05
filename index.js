alert("Esta es una calculadora para saber si te conviene en efectivo o en 12 cuotas")

function valorPresente(precioCuotas) {
    return precioCuotas / (1 + 0.1) ** 12
}

let continuar = true

while (continuar) {
    const precioEfectivo = parseInt(prompt("Ingresa el precio en efectivo del producto"))
    const precioCuotas = parseInt(prompt("Ingresa el precio en cuotas"))

    const cuotasValorPresente = valorPresente(precioCuotas)

    if (cuotasValorPresente < precioEfectivo) {
        alert("Te conviene comprar en cuotas")
    } else if (precioEfectivo < cuotasValorPresente) {
        alert("Te conviene comprar en efectivo")
    } else {
        alert("Da lo mismo pagar en efectivo o en cuotas")
    }

    continuar = confirm("¿Queres realizar otra comparación?")
}

alert("Gracias por usar la calculadora")







