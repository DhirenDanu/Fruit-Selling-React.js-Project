import React from 'react'
import fruit7 from '../../assets/Fruits/fruit7.png'


const Banner2 = () => {
  return (
    <section className=''>
    <div className="container mb-20 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        
        {/* Move the text section above the image section */}
        <div className='flex flex-col justify-center'>
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                <h1 className='text-3xl lg:text-6xl font-bold uppercase'>Online Fruit Store</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis numquam animi perspiciatis rem aperiam ab aliquid? Magni libero, eaque iste, iure perspiciatis molestiae nisi reprehenderit aliquid nesciunt deserunt quam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, quidem exercitationem debitis quo sed quod ad distinctio eos porro qui. Libero sunt pariatur, asperiores enim fugit mollitia cumque doloribus eos.</p>
                <button className='primary-btn'>
                    Download App
                </button>
            </div>
        </div>

        {/* Image section now comes second */}
        <div className='flex justify-center items-center'>
            <img src={fruit7} alt=' ' className='w-[300px] md:max-w-[600px] h-full object-cover drop-shadow' />
        </div>
        
    </div>
</section>


  )
}

export default Banner2
