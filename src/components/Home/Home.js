import React from 'react';

const Home = () => {
    return (
        <div>
           <div className=' grid grid-cols-3'>
            <div className=' col-span-2 w-3/4 mx-auto flex justify-center items-center'>
                <div>
                <h2 className=' text-7xl font-bold my-5 text-green-700 font-serif'>We Give Quality</h2>
                <h2 className=' text-7xl font-bold my-5 text-blue-700 font-serif'>You Get Best</h2>
                <p className='w-3/4 text-justify mt-5 text-lg'>Take the best laptop from here. Super quality Laptop with fast performance and guarantee. There are various type of laptop. You can choose as your requirements. Light-weight , ultra slip laptop and high processor.</p>
                </div>
            </div>
            <div className='my-10 w-3/4 '>
                <img className=' rounded-lg' src="hero.jpg" alt="Laptop" />
            </div>
           </div>
        </div>
    );
};

export default Home;