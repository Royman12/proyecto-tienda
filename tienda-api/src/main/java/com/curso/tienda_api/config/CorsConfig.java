package com.curso.tienda_api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration: esta clase trae ajustes de configuración para Spring
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")                       // todas las rutas de la API
                .allowedOrigins("http://localhost:4200")      // solo el frontend Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}