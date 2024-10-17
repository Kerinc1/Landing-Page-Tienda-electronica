const arrayProductos = [];

function agregarAlCarrito(producto, precio) {
    // Verificamos si el producto ya existe en el carrito
    const productoExistente = arrayProductos.find(item => item.producto === producto);
    if (productoExistente) {
        productoExistente.cantidad += 1; // Si existe, aumentamos la cantidad
    } else {
        arrayProductos.push({ producto, precio, cantidad: 1 }); // Si no existe, lo agregamos
        efectoAgregarProducto();
    }
    renderizarCarrito();
}

function renderizarCarrito () {
    const cartItems= document.getElementById('cart-items'); //obtenemos el producto
    const cartTotal=document.getElementById('cart-total'); // obtenemos el precio
    cartItems.innerHTML = ''; //Limpia solo los productos

    let total= 0; 

    arrayProductos.forEach((item, indice) => {  // .forEach es un metodo callback que recorre el array elemento x elemento  segun la funcion que se le coloque
        const cartItem = document.createElement('div'); // creamos una variable que va a contener el metodo que creara el div que va a anidar los productos
        cartItem.className = 'cart-item'; // establecemos la clase cart-item a cartItem, es decir, al div que creamos anteriormente
        cartItem.innerHTML=`
            <div class="product-info">
                <!-- concatenamos item.producto donde item accedera a producto a traves del forEach-->
                <h3>${item.producto}</h3> 
                <!-- concatenamos item.precio con .toLocaleString() para cambiar a formato str y formatear los numeros -->
                <p>$${item.precio.toLocaleString()}</p>
            </div>
            <div class="quantity">
                <!--creamos los botones para cambiar la cantidad de productos en el carrito -->
                <button class="btn-quantity-1" onclick="cambiarCantidad(${indice}, -1)">-</button>
                <span class="quantity-number">${item.cantidad}</span>
                <button class="btn-quantity-2" onclick="cambiarCantidad(${indice}, 1)">+</button>
            </div>       
        `;
        cartItems.appendChild(cartItem); //appendChild nos va a permitir agregar este nuevo contenido al DOOM 
        total += item.precio * item.cantidad; // Sumamos el precio de los ítems multiplicado por la cantidad y los agregamos al total
    });

    cartTotal.innerText = total.toLocaleString(); //actualizamos el total con el .innerText en la vista y formateado
}

function cambiarCantidad(indice, cambio) {

    const item = arrayProductos[indice]; // Obtenemos el producto basado en el índice
    if (item.cantidad === 1 && cambio === -1) {
        const confirmar = confirm("¿Deseas eliminar este producto del carrito?");
        if (confirmar) {
            arrayProductos.splice(indice, 1); // Eliminamos el producto si se confirma
            renderizarCarrito(); // Renderizamos el carrito para reflejar los cambios
            return;
        } else {
            return; // No hacemos nada si no se confirma
        }
    } else {
        item.cantidad += cambio; // Cambiamos la cantidad
        if (item.cantidad < 1) {
            item.cantidad = 1; // Aseguramos que la cantidad no sea menor a 1
        }
    }
    
    renderizarCarrito(); 

}

function mostrarCarrito() {
    const cartContainer = document.querySelector('.cart-container');
    
    // Verificar el estado actual del carrito y cambiar la visibilidad
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block';  // Mostrar el carrito
    } else {
        cartContainer.style.display = 'none';   // Ocultar el carrito si ya está visible
    }
}

function efectoAgregarProducto() {
    const cartContainer = document.querySelector('.bar');
    cartContainer.classList.add('sacudir')

    // Eliminar sombra después de 5 segundos
    setTimeout(() => {
        cartContainer.classList.remove('sacudir');
    }, 500);
}