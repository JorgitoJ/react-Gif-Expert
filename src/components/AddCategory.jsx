import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    
    const [inputValue, setinputValue] = useState("")
    
    const handleInputValue=(e)=>{
        setinputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(o =>[inputValue,...o]); 
            setinputValue('');
    }

    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputValue}
        />
        </form>
    )
}

AddCategory.propTypes={
    setCategory : PropTypes.func.isRequired
}