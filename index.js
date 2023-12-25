alert("Esta es una calculadora que guarda productos y te dice en la consola si te conviene pagar en efectivo o en 12 cuotas")

function valorPresente(precioCuotas) {
    return precioCuotas / (1 + 0.1) ** 12
}

function Producto(nombre, precioEfectivo, precioCuotas) {
    this.nombre = nombre
    this.precioEfectivo = precioEfectivo
    this.precioCuotas = precioCuotas
    this.cuotasValorPresente = valorPresente(precioCuotas)
    this.recomendacion = this.cuotasValorPresente < precioEfectivo ? "Conviene pagar en cuotas." : "Conviene pagar en efectivo."
}

let productos = [];

function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del producto");
    let precioEfectivo = parseInt(prompt("Ingresa el precio en efectivo del producto"))
    let precioCuotas = parseInt(prompt("Ingresa el precio en cuotas del producto"))

    let producto = new Producto(nombre, precioEfectivo, precioCuotas)
    productos.push(producto)
}

function aplicarAProductos(productos, funcion) {
    productos.forEach(producto => funcion(producto))
}

function mostrarInformacionProducto(producto) {
    console.log(`Producto: ${producto.nombre}, Precio en Efectivo: ${producto.precioEfectivo}, Precio en Cuotas: ${producto.precioCuotas}, Recomendación: ${producto.recomendacion}`)
}

function mostrarHistorial() {
    aplicarAProductos(productos, mostrarInformacionProducto)
}

let continuar = 1

while (continuar === 1) {
    agregarProducto()
    continuar = parseInt(prompt("¿Deseas agregar otro producto? (1 para sí, 0 para no)"))
}

mostrarHistorial();
