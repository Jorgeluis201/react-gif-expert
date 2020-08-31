import React,{useState} from 'react'
import PropTypes from 'prop-types';
//se desestructura y se llama setCategories
export const AddCategory = ({setCategories}) => {
  
    //Valor inicial de el input text,tambien llamado estado
    const [inputValue, setinputValue] = useState('Ingrese nuevo anime')

    const handleInputChange = ( e )=>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats=> [inputValue,...cats]);
            setinputValue('')
        }
        

    }
    //onSudmit
    //onChange se va a disparar cada vez que esa caja de texto cambie, dentro del onChange se puede poner una funcion de flecha
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange} 
            />
        </form>
    )
}
//dentro se coloca el nombre de la propiedad que se desea hacer requerida
AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}
