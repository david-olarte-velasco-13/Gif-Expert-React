import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );  // hook personalizado 


    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )  // compuerta logica para la ocndicipon de renderizar el aviso de 'cargando' 
            }

            <div className="card-grid">
                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }   // tecnica con la cual mediante ... esparcimos las props del componente y se puede acceder a todas ellas sin listarlas una por una
                            
                        />
                    )) 
                }
            </div>

        </>
    )
}


