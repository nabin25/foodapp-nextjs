import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { assets } from '@/public/assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'
import Image from 'next/image'

const FoodItem = ({id, name, price, description, image}) => {
    const {cartItems, addToCart, removeFromCart, currencySymbol, currencyMultiplier} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <Image src={image} alt="" className="food-item-img" />
            {!cartItems[id]
                ?<Image className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='image not found'/>:
                <div className="food-item-counter">
                    <Image onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <Image onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <Image src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>{currencySymbol}{(price*currencyMultiplier).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default FoodItem