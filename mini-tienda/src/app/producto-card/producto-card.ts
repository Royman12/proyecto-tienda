import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-card',
  imports: [FormsModule], // FUNCIONALIDAD B: para usar [(ngModel)] en el campo de cantidad
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  producto = input.required<Producto>();
  comprar = output<number>();
  reponer = output<{ id: number; cantidad: number }>(); // FUNCIONALIDAD B: ahora envía id y cantidad
  eliminar = output<number>();

  // FUNCIONALIDAD B: valor del campo numérico de la tarjeta
  cantidad = signal(5);

  alHacerClic() {
    this.comprar.emit(this.producto().id);
  }

  // FUNCIONALIDAD B: avisa al padre con el id y la cantidad escrita
  alReponer() {
    this.reponer.emit({ id: this.producto().id, cantidad: this.cantidad() });
  }
}