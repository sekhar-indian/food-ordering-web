import React from 'react';
import './menuitemsty.css';
const Products = ({ data }) => {
return (
<div>
  <div class="items">
  <div class="row">
    {data.map((item, index) => (
        <div class="col-6 col-md-4 col-lg-3 pt-5 pb-5 "  key={index}>

          <div class="shadow menuBorder p-3">
          <h2 class="menuHeading" >{item.nameOfTheItem}</h2>
          <p>
            <img class="menuImg w-100 " src={item.imgLink} alt={`Item ${index}`} />
          </p>
          <p class="menuItemDiscription">{item.itemDescription}</p>
          <button class="orderbutton" type="button">Order</button>
          </div>

        </div>
    ))}
     </div>
  </div>
</div>
);
};

export default Products;
