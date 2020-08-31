import React, {  useState }  from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{
    //crear una constante que contenga un arreglo
    //utilizar ol para mostrar el arreglo en una lista ordenada
    //Se utiliza un metodo de el arreglo, llamado map, que transforma
    //cada uno de los elementos que estan dentro de su arreglo
//map, recibe dos argumentos, 1. elemento de arreglo, 2. indice
//const categories = ['One Punch','Fairy Tail','D-Gray-Man']

    const [categories,setCategories] = useState(['Fairy Tail']);
//Para agregar nuevos elementos se usa el operador ...
// const handleAdd=()=> {
//   setCategories(cats=> [...cats,'Black clover']);
//} ;

//comunicacion  entre categorias, se puede pasar propiedades a el componente, en este caso se le pasa una funcion, que es setCategories, dentro se le manda la referecia a setCategories
    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/> 
        
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category}/>
                ))
            }
        </ol>
        </>
    )

}