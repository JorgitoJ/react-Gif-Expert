import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
  
    const {data:images, loading} = useFetchGifs(category)

    return (
      <>
      
      <h2 className="animate__animated animate__fadeIn">{category}</h2>
      
      {loading && <p className="animate__animated animate__flash animate__repeat-2" >Loading...</p>}

    <div className="card-grid">

        {images.map(img => (

          <GifGridItem 
            key={img.id}
            {...img}               
          />

        )
          
        )}
      
    </div>
      
      </>

      
  )
}
