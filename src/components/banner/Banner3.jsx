import React from 'react';
import fruit10 from '../../assets/Fruits/fruit10.jpg';

const bgstyle = {
    backgroundImage: `url(${fruit10})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    height: '100%', // Ensure the div has a height
    
};

const Banner3 = () => {
    return (
        <div>
            <section>
                <div style={bgstyle} className="container pb-20 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-2xl ">
                    
                    <div className='flex flex-col justify-center'>
                        <div className="text-center text-white md:text-left space-y-4 lg:md-w-[400px]">
                            <h1 className='text-3xl lg:text-6xl font-bold uppercase'>Get Fresh Fruits Today</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis numquam animi perspiciatis rem aperiam ab aliquid? Magni libero, eaque iste, iure perspiciatis molestiae nisi reprehenderit aliquid nesciunt deserunt quam.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, quidem exercitationem debitis quo sed quod ad distinctio eos porro qui. Libero sunt pariatur, asperiores enim fugit mollitia cumque doloribus eos.</p>
                            <button className='primary-btn'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    );
}

export default Banner3;
