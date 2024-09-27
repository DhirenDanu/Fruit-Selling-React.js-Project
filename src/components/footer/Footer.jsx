import React from 'react'
import {FaFacebookF, FaTwitter,FaInstagram,FaLeaf} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" bg-secondary/30 text-black py-20 mt-20">
    <div className="container flex justify-between items-center">
        {/* logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase' >
        <p className='text-primary'>Fruit</p>
        <p className='text-secondary'>Store</p>
        <FaLeaf className='text-green-500'/>
         </div>
        {/* socialsection */}
        <div className='text-3xl flex items-center gap-5 text-gray-500'>
            <FaInstagram/>
            <FaFacebookF/>
            <FaTwitter/>
            
        </div>
    </div>
    </footer>
  )
}

export default Footer

