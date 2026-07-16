
package com.actividad1.primerospasos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class InformacionCualquierRestControlador {

    @GetMapping("/edadjahir")
    public int edadJahir(){
        return 20;
    }
    
}