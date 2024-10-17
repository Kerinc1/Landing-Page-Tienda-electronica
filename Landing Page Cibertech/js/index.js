const carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    renderizarCarrito();
}

function renderizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Limpiar solo los productos

    let total = 0; // Variable para calcular el total

    carrito.forEach((item, indice) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="product-info">
                <h3>${item.producto}</h3>
                <p>$${item.precio.toLocaleString()}</p>
            </div>
            <div class="quantity">
                <button class="btn-quantity" onclick="cambiarCantidad(${indice}, -1)">-</button>
                <span class="quantity-number">1</span>
                <button class="btn-quantity" onclick="cambiarCantidad(${indice}, 1)">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);

        total += item.precio; // Sumar el precio al total
    });

    cartTotal.innerText = total.toLocaleString(); // Actualizar el total en la vista
}

function cambiarCantidad(index, cantidad) {
    // Lógica para cambiar la cantidad
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
