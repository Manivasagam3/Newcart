import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item  from '../Components/Item/Item';
import Mens from '../Components/Assets/menss'



const ShopCategory = (props) => {
  const{all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner}/>
      <div className="shopcategory indexsort">
        <p>
          <span>showing 1-12</span>out of 36 product
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategory-products">
           {Mens.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>})}

      </div>
    </div>
  )
}

export default ShopCategory;
