import React from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item  from '../Components/Item/Item';
import womens from '../Components/Assets/womenss';
import banner_womens from '../Components/Assets/banner_women.png';
import './CSS/Mens.css'

const Womens=()=>{

  return (
    <div className='shop-category'>
      <img src={banner_womens}/>
      <div className="shopcategory">
        <p>
          <span>showing 1-12</span>out of 36 product
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategory-products">
           {womens.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>})}

      </div>
    </div>
  )
}


export default Womens;
