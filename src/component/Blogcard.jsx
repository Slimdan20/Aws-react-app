import React from 'react'
import './Blogcard.css'
import BlogImage from '../assets/blogImage.jpg'

const Blogcard = () => {
  return (
    <div className='card'>
    <div className='image'>
        <img src={BlogImage} alt="" />
      </div>
      <div className='description'>
        <p>Developers</p>
      </div>
      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi
          quo, officiis fugiat illo perspiciatis veniam dignissimos, soluta
          dolor magni blanditiis. Eos at facilis reiciendis quibusdam aperiam
          fuga consectetur consequuntur?{" "}
        </p>
      </div>
    </div>
  )
}

export default Blogcard