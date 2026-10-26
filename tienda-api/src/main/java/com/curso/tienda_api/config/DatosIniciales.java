package com.curso.tienda_api.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.curso.tienda_api.modelo.Producto;
import com.curso.tienda_api.repositorio.ProductoRepository;

// CommandLineRunner: el método run() se ejecuta una vez, al arrancar el servidor
@Component
public class DatosIniciales implements CommandLineRunner {

    private final ProductoRepository repositorio;

    // Inyección por constructor: Spring entrega el repositorio ya creado
    public DatosIniciales(ProductoRepository repositorio) {
        this.repositorio = repositorio;
    }

    @Override
    public void run(String... args) {
        if (repositorio.count() == 0) {
            repositorio.saveAll(List.of(
                new Producto("Manzana", 20.5, 3, "/imagenes/manzana.jpg"),
                new Producto("Piña", 15.36, 5, "/imagenes/pina.jpg"),
                new Producto("Pera", 5.45, 2, "/imagenes/pera.jpg"),
                new Producto("Papaya", 6.15, 0, "/imagenes/papaya.jpg")
            ));
            System.out.println(">> Se cargaron los productos iniciales");
        }
    }
}