// import { cleanup } from '@testing-library/react';
import React ,{useState,useEffect}from 'react'

export default function ScrollHooks(){
    const [scrolly,setScrolly]=useState(0);

    useEffect(()=>{
        console.log("Moviendo el scroll");
        const detectarScroll=()=>{
            setScrolly(window.pageYOffset);
        }
        window.addEventListener("scro ll",detectarScroll);
        return()=>{
            window.removeEventListener("scroll",detectarScroll)
            console.log("Fase de Desmontaje");       
        };
    },[scrolly]);
    
    useEffect(()=>{
        console.log("Fase de Montaje");
    },[]);

    useEffect(()=>{
        console.log("Fase de actulización");
    })

    useEffect(()=>{
        return()=>{
            console.log("Fase de Desmontaje");       
        };
    })
    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrolly}px</p>
        </>
    )
}