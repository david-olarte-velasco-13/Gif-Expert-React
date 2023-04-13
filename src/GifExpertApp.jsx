import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory)) return;

        setCategories( [ newCategory, ...categories ] );  /// modificar el arrray con el operador spread para conservar las caracteristicas del estado inicial
        //setCategories( [ 'Naruto', ...categories ] );  // si se quiere inseertar al inicio del array
    };

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />

            
            { categories.map( ( category ) => (
                <GifGrid key={ category } category={ category }/>
                )) 
            }
            

        </>
    )
}


