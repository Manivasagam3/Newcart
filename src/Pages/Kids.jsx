import React from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item  from '../Components/Item/Item';

import kids_banner from '../Components/Assets/banner_kids.png'
import kids from '../Components/Assets/kids';
import './CSS/Mens.css'

const Mens=()=>{
   return (
    <div className='shop-category'>
      <img src={kids_banner}/>
      <div className="shopcategory ">
        <p>
          <span>showing 1-12</span>out of 36 product
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategory-products">
           {kids.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>})}

      </div>
    </div>
  )
}


export default Mens;
