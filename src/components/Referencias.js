import React,{createRef,useRef} from 'react';

export default function Referencias(){
    //let refMenu= createRef(),  este para class component
    let refMenu= useRef(),
    refMenuBtn=useRef();
    
    const handleToggleMenu=(e)=>{
        /*const $menu=document.getElementById("menu");
        
        if(e.target.textContent === "Menu"){
            e.target.textContent="Cerrar";
            $menu.style.display="block"
        }else{
            e.target.textContent="Menu";
            $menu.style.display="none"
        }*/
        if (refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    };
    
    return(
     <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn}  onClick={handleToggleMenu}>Menú</button>
        <nav id="menu" ref={refMenu} style={{display:"none"}}>
            <a href="#">Secccion 1</a>
            <br/>
            <a href="#">Secccion 2</a>
            <br/>
            <a href="#">Secccion 3</a>
            <br/>
            <a href="#">Secccion 4</a>
            <br/>
            <a href="#">Secccion 5</a>
        </nav>
     </>
 );
}