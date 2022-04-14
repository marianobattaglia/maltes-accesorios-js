function Producto(nombre, precio, cantidad) {
    this.nombre  = nombre.toUpperCase();
    this.precio  = parseFloat(precio);
    this.cantidad = parseFloat(cantidad);
}

const producto1 = new Producto("Aros corazón Swarovski", 1850);
const producto2 = new Producto("Cjto. corazón Cristal", 2350);
const producto3 = new Producto("Argollitas con bolitas", 1990);
const producto4 = new Producto("Anillo luna", 1250);
const producto5 = new Producto("Aros corazón Blanco", 1850);
const producto6 = new Producto("Conjunto ojo protector", 2150);

// Change
let input01  = document.getElementById("prod-name-1");
input01.innerText = producto1.nombre
let input02  = document.getElementById("prod-name-2");
input02.innerText = producto2.nombre
let input03  = document.getElementById("prod-name-3");
input03.innerText = producto3.nombre
let input04  = document.getElementById("prod-name-4");
input04.innerText = producto4.nombre
let input05  = document.getElementById("prod-name-5");
input05.innerText = producto5.nombre
let input06  = document.getElementById("prod-name-6");
input06.innerText = producto6.nombre


// Eventos
let padre = document.getElementById("carrito")

// Boton 1
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", respuesta1);
function respuesta1() {
    //logica para guardar en el carrito
    let lineaCarrito = document.createElement("li")
    let nombreProducto = producto1.nombre
    let precioProducto = producto1.precio
    lineaCarrito.innerHTML = `${nombreProducto} x $${precioProducto}`
    padre.appendChild(lineaCarrito)
    alert(`Has agregado 1 item al carrito`)
}

// Boton 2
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", respuesta2);
function respuesta2() {
    //logica para guardar en el carrito
    let lineaCarrito = document.createElement("li")
    let nombreProducto = producto2.nombre
    let precioProducto = producto2.precio
    lineaCarrito.innerHTML = `${nombreProducto} x $${precioProducto}`
    padre.appendChild(lineaCarrito)
    alert(`Has agregado 1 item al carrito`)
}

// Boton 3
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", respuesta3);
function respuesta3() {
    //logica para guardar en el carrito
    let lineaCarrito = document.createElement("li")
    let nombreProducto = producto3.nombre
    let precioProducto = producto3.precio
    lineaCarrito.innerHTML = `${nombreProducto} x $${precioProducto}`
    padre.appendChild(lineaCarrito)
    alert(`Has agregado 1 item al carrito`)
}

// Boton 4
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", respuesta4);
function respuesta4() {
    //logica para guardar en el carrito
    let lineaCarrito = document.createElement("li")
    let nombreProducto = producto4.nombre
    let precioProducto = producto4.precio
    lineaCarrito.innerHTML = `${nombreProducto} x $${precioProducto}`
    padre.appendChild(lineaCarrito)
    alert(`Has agregado 1 item al carrito`)
}

// Boton 5
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", respuesta5);
function respuesta5() {
    //logica para guardar en el carrito
    let lineaCarrito = document.createElement("li")
    let nombreProducto = producto5.nombre
    let precioProducto = producto5.precio
    lineaCarrito.innerHTML = `${nombreProducto} x $${precioProducto}`
    padre.appendChild(lineaCarrito)
    alert(`Has agregado 1 item al carrito`)
}

// Boton 6
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", respuesta6);
function respuesta6() {
    //logica para guardar en el carrito
    let lineaCarrito = document.createElement("li")
    let nombreProducto = producto6.nombre
    let precioProducto = producto6.precio
    lineaCarrito.innerHTML = `${nombreProducto} x $${precioProducto}`
    padre.appendChild(lineaCarrito)
    alert(`Has agregado 1 item al carrito`)
}

// Funcion para agregar item a la lista/carrito
function agregarCarrito(product) {
    let lineaCarrito = document.createElement("li")
    lineaCarrito.innerHTML = `${product.nombre} x $${product.precio}`
    padre.appendChild(lineaCarrito)
}
