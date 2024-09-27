import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu'


const NavbarMenu = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Products', link: '#' },
    { id: 3, title: 'About', link: '#' },
    { id: 4, title: 'Shop', link: '#' },
    { id: 5, title: 'Contacts', link: '#' },
];

const Navbar = () => {
     const[open,setopen]=React.useState(false); //why not using react here putting bugging

  return (
    <>
    <nav>
    <div className="container flex justify-between items-center py-4 md:pt-4">
        {/* Logo Section */}
       <div className='text-3xl flex items-center gap-2 font-bold uppercase'> 
        <p className='text-primary'>Fruit</p>
        <p className='text-secondary'>Store</p>
        <FaLeaf className='text-green-500'/>
        </div>
        {/* Menu Section */}
        <div className='hidden md:block'> {/* for the visibility  in bigger sreen only on smaller it will hide */}
            <ul className='flex items-center gap-6 text-orange-300'>
               {NavbarMenu.map((menu)=> (<li key={menu.id} className='text-xl'>
                <a href={menu.link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>
                    {menu.title}</a>
               </li>))}
            <button className='text-3xl text-red-600 hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
            <FaCartShopping />
            </button>
            </ul>
        </div>
         <div className='md:hidden' onClick={()=>setopen(!open)}>{/*by md hidden this div will hide itself larger than medium screen */}
        <MdMenu className='text-4xl'/>
        </div>   
    </div>
    </nav>
     {/* Mobile Menu Section */}
      {/*passed open prop in next component  */}
     <ResponsiveMenu open={open}/>
     </>
  )
}

export default Navbar
