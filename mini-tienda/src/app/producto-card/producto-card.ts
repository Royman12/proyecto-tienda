import { Component, input, output } from '@angular/core';
import { Producto } from '../producto';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  producto = input.required<Producto>();
  // Evento propio del componente. El <number> indica que enviará un número (el id)
  comprar = output<number>();

  alHacerClic() {
    // emit() dispara el evento y envía el id hacia el componente padre
    this.comprar.emit(this.producto().id);
  }

}
