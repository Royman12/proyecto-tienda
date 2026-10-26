package com.curso.tienda_api.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curso.tienda_api.modelo.Producto;

// JpaRepository<Producto, Long>: repositorio de Productos cuya llave es Long.
public interface ProductoRepository extends JpaRepository<Producto, Long> {
}