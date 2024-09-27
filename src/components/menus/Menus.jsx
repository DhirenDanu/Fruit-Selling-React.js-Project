import React from 'react'
import fruit6 from '../../assets/Fruits/fruit6.png'
import fruit4 from '../../assets/Fruits/fruit4.png'
import fruit8 from '../../assets/Fruits/fruit8.png'
const MenuData=[
    {id:1, title:"Fresh Apple", link:'/',price:'$2',img:fruit6},
    {id:2, title:"Fresh Mango ", link:'/',price:'$3',img:fruit4},
    {id:3, title:"Fresh Cheery ", link:'/',price:'$4',img:fruit8}, 
]
const Menus = () => {
  return (
   <section>
    <div className='container pt-12 pb-20'>
        <h1 className=' text-2l font-bold text-left pb-10 uppercase'> Our Menu</h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8  '>
            {MenuData.map((menu)=>
            <div className='bg-white rounded-3xl p-10 pb-10 m-2  shadow-[0_0_22px_0_rgb(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                <img src={menu.img} alt=' ' className='w-[60px]  scale-125 transform - translate-y-6'></img>
                 <div>
                    <h1 className='text-lg font-semibold'>{menu.title}</h1>
                    <h1 className='text-lg font-semibold  text-secondary'> {menu.price}</h1>
                 </div>
            </div>
            
            )}
        </div>
    </div>
   </section>
  )
}

export default Menus
