import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    const [reviews,setReviews] = useReview()
    const needReviews = reviews.slice(0,3)
    return (
        <div>
           <div className='hero-section grid grid-cols-3'>
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
           <div className='review-section w-3/4 mx-auto my-10'>
            <p className='text-5xl text-center font-bold'>See Reviews</p>
            <div className="reviewContainer grid grid-cols-3 gap-3 my-10">
                {
                    needReviews.map(review=><HomeReview key={review.id} review={review}></HomeReview>)
                }
            </div>
            <div className=' text-center'>
                <Link className='text-white bg-black px-5 py-2 rounded-lg' to={'/review'}>See All Review</Link>
            </div>
           </div>
        </div>
    );
};

export default Home;