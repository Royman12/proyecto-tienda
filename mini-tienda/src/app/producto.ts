// Esta interfaz define la "forma" que debe tener cualquier producto de la tienda
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen: string;
  stockMinimo: number;
}
