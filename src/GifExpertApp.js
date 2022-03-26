import React, { Fragment } from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Dragon Ball', 'Simpsons','south park'];

    const [categories, setCategories] = useState(['Simpsons']);

  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <hr/>
        <AddCategory setCategories={setCategories}/>
        <ol>
            {
                categories.map(category=>
                    <GifGrid  
                        key={category}    
                        category={category}/>
                )
            }
        </ol>
    </Fragment>
  )
}
