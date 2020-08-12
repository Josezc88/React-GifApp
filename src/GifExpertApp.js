import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// const categories = ['One punch', 'Naruto', 'Bleach'];

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     // categories.push('HunterXHunter');
    //     setCategories( ['HunterXHunter', ...categories ] );
    //     // setCategories( cats => [ ...cats, 'One Piece' ]);
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}/>
                    )
                }
            </ol>
        </>
    )
}
