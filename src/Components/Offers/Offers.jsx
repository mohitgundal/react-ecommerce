import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        {/* <h1>Exclusive</h1> */}
        <h1>Handpicked</h1>
        {/* <h1>Offers for You</h1> */}
        <h2>Deals Just for You</h2>
        {/* <p>ONLY ON BEST SELLERS PRODUCTS</p> */}
        <p>Best-Selling Styles. Special Prices.</p>
        <button>Season’s Fresh</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
