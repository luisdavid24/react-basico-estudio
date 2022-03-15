import {useState,useEffect} from 'react';

export const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [isPendig,setIsPendig]=useState(true)
    const [error,setError]=useState(null)
    
    
    useEffect(()=>{
        const getData = async (url)=>{
            try {
                let res =await fetch(url);
                
                if(!res.ok){
                    throw{
                        err:true,
                        status:res.status,
                        statusText:!res.statusText ? "Ocurrio un error": res.statusText,
                    };
                }
                let data = await res.json();
                
                setIsPendig(false);
                setData(data);
                setError({err:false});


            } catch (err) {
                setIsPendig(true);
                setError(err);

            }
            
        }
        getData(url);


    },[url]);


    return {data,isPendig,error};
}