import { Component, signal, computed } from '@angular/core';
import { Producto } from './producto';
import { ProductoCard } from './producto-card/producto-card';


@Component({
  selector: 'app-root',
  imports: [ProductoCard],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // signal<Producto[]> significa: una señal que guarda una lista de productos
  productos = signal<Producto[]>([
    { id: 1, nombre: 'Manzana', precio: 20.5, stock: 3 },
    { id: 2, nombre: 'Piña', precio: 15.36, stock: 5 },
    { id: 3, nombre: 'Pera', precio: 5.45, stock: 2 },
    { id: 4, nombre: 'Papaya', precio: 6.15, stock: 0 }
  ]);

  // El carrito empieza como una lista vacía
  carrito = signal<Producto[]>([]);

  agregarAlCarrito(id: number) {
    const producto = this.productos().find(p => p.id === id);

    // Condicional: si no existe o ya no hay unidades, no se vende
    if (!producto || producto.stock === 0) {
      return;
    }

    this.carrito.update(items => [...items, producto]);

    // map() recorre la lista y devuelve otra lista: al producto comprado le resta
    // una unidad de stock y a los demás los deja igual
    this.productos.update(lista =>
      lista.map(p => p.id === id ? { ...p, stock: p.stock - 1 } : p)
    );
  }


  // reduce() recorre el carrito sumando el precio de cada elemento, empezando en 0
  total = computed(() =>
    this.carrito().reduce((suma, item) => suma + item.precio, 0)
  );




}
