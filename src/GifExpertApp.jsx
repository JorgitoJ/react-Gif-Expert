import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = ()=>{

    const [categorias, setCategory] = useState(['']) 

    const refresh = ()=> setCategory([''])
    
    return(
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategory = { setCategory }/>
            
            <button onClick={refresh}> Refresh </button>
            
            <hr />
          
            <ol>
                {categorias.map((category)=>
                    <GifGrid 
                        key={category}
                        category={category}/>
                )}
            </ol>
        </>
    ) 
}