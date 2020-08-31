import {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs=( category )=>{

    const [state, setState] = useState({
        data:[],
        loading: true
    })
    //primer arumento es una funcion
    //segundo argumento va a ser un arreglo de dependencias
    //[], significa que este codigo, solo quiero que se ejcute, solo cuando se renderiza el componente por primer vez
   
    useEffect( ()=>{
        getGifs( category )
            .then(imgs=>{

                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading:false
                    })
                });
                
            })
    },[ category ] )
    
    return state;//{data:[],loading:true}
}