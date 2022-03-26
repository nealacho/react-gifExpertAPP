import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetch} from '../hoooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetch(category);
   


  return (
    <Fragment>
        <h3>{category}</h3>
        {loading ? <p>Cargando...</p>: 'Data Cargada'}
        <div className='card-grid'>
            
            {
                data.map(img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />          
                ))
            }   
        </div>
    </Fragment>
    
  )
}
