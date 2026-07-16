package com.actividad1.primerospasos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ProyectoControlador {
    
    @GetMapping("/")
    public String getInicio() {
        return "index";
    }
    
}
