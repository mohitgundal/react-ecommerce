import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">Description</div>
              <div className="descriptionbox-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
              <p>An e-commerce website is your digital storefront to the world—a place where products meet people, and clicks turn into customers. It transforms browsing into buying by allowing businesses and individuals to showcase their offerings, connect with customers in real time, and complete transactions without borders or brick-and-mortar limits. With 24/7 accessibility and global reach, e-commerce turns imagination into enterprise, and convenience into commerce.</p>
              <p>
                  E-commerce websites typically present products or services with rich visuals, detailed descriptions, pricing, and available options such as sizes or colors. Each item is showcased on its own dedicated page, offering customers all the information they need to make informed decisions—from high-quality images to key specifications and variations. 
              </p>
          </div>
    </div>
  )
}

export default DescriptionBox
