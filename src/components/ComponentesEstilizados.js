import React from 'react';
import styled,{css} from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor="#db7093",
    mainAlphaColor80="#db709380";

    const setTransitionTime= (time)=>`all${time}esea-in-out`;
    
    const MyH3=styled.h3`
        padding:2rem;
        text-align:center;
        color:${props=>props.color};
        color:${({color}) => color||"#000"};
        background-color:${mainColor};
        
        ${(props)=>props.isButton && css`
            margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer;
        `}
        
        transition:${setTransitionTime("1s")};
        
        &:hover {
            background-color:${mainAlphaColor80};
        }
    `;
    
    return(
        <>
            <h2>Styled-components</h2>
            <MyH3>hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 isButton>hola soy un h3 estilizado como boton</MyH3>
        
        </>
    )
}