import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-form',
  imports: [FormsModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css'
})
export class ProductoForm {
  // Una señal por cada campo del formulario
  nombre = signal('');
  precio = signal(0);
  stock = signal(0);
  imagen = signal('');
  stockMinimo = signal(2); // FUNCIONALIDAD B: por defecto 2

  guardar = output<Omit<Producto, 'id'>>();

  enviar() {
    this.guardar.emit({
      nombre: this.nombre(),
      precio: this.precio(),
      stock: this.stock(),
      imagen: this.imagen(),
      stockMinimo: this.stockMinimo() // FUNCIONALIDAD B
    });
    // Limpiar el formulario
    this.nombre.set('');
    this.precio.set(0);
    this.stock.set(0);
    this.imagen.set('');
    this.stockMinimo.set(2); // FUNCIONALIDAD B: vuelve al valor por defecto
  }
}