package com.actividad1.primerospasos.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class ProyectoRestControlador {

    @GetMapping("/nombrecompleto")
    public String getMethodName() {
        return "Gomez Roblero Angel Jahir";
    }
    

    @GetMapping("/proyecto")
    public String getDatosProyecto(){
        return "Actividad 1 Spring Boot";
    }

     @GetMapping("/mismaterias")
    public List<String> getMisDatos() {
        
        return List.of(
            "Programación web",
            "Conmutacion y enrrutamiento de redes",
            "ingles"
        );
    }

    @GetMapping("/manzana")
    public Map<String,String> obtenerDatosManzana(){
        Map<String, String> entidades = new HashMap<>();
        entidades.put("Precio", "10 pesos");
        entidades.put("Disponibilidad", "mucha");
        entidades.put("categoria", "fruta");
        entidades.put("Es rica", "Si");
        return entidades;
    }
}