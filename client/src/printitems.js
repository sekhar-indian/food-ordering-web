import React from 'react';

const Products=({data})=>{
    return (
        <div>
            <img src={data.imgLink}/>
        </div>
    )
}

export default Products;