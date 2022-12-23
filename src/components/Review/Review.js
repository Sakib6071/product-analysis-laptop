import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {
    const [reviews,setReviews] = useReview()
    return (
        <div className='w-3/4 mx-auto my-10'>
            <p className='text-5xl text-center font-bold my-3'>All Review</p>
            <div className='grid grid-cols-1 gap-2 my-10'>
            {
                reviews.map(review=><ReviewDetails key={review.id} review={review}></ReviewDetails>)
            }
            </div>
        </div>
    );
};

export default Review;