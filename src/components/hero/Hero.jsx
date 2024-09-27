import React from 'react'
import { IoBagAddOutline } from "react-icons/io5";
import fruit11 from '../../assets/Fruits/fruit11.png';
import blue from '../../assets/Fruits/blue.png';
function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

        {/* BrandInfo */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <h1
              className='text-5xl lg:text-6xl font-boldleading-relaxed xl:leading-loose font-averia'>Healthy<br />  Fresh
              <span className='text-secondary'>Fruits!</span></h1>
            <p
              className='2xl tracking-wide'>Order now for Fresh healthy Life</p>
            <p
              className='text-gray-400'>Healthy and yummy fruits for fresh morning breakfast .Eat daily forgood health and mind Order now and get 20% off on your first order</p>

            {/* Button Section */}
            <div
              className='flex justify-center md:justify-start'>
              <button className='primary-btn flex items-center gap-2'>
                <span> <IoBagAddOutline /></span>
                OrderNow</button>
            </div>
          </div>
        </div>

        {/* HeroImage */}
        <div className='flex justify-center items-center'>
          <img src={fruit11} alt=' ' className=' w-[350px] md:w-[550px] drop-shadow'></img>
        </div>
        {/* LeafImage */}
        <div className='absolute top-14 md:top-40 right-2/3  blur-sm  opacity-100 rotate-[-100deg] '>
          <img src={blue} alt='' className='w-full md:max-w-[200px]'></img>
        </div>

      </div>
    </section>
  );
}

export default Hero
