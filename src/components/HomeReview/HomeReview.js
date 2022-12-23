import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const HomeReview = (props) => {
    const {name,review,img,rating}=props.review
    let designRating='';
    if(rating==5){
        designRating= <span> 
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>     
        </span>
    }
    else if (rating==4){
        designRating= <span> 
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>    
    </span>
    }
    else{
        designRating= <span> 
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>    
    </span>
    }
    return (
        <div className='grid grid-cols-3 bg-yellow-200 px-3 py-2 rounded-lg'>
            <div className='grid grid-cols-1'>
                <img className='mx-auto w-20 rounded-full border-2 border-red-600' src={img} alt="userImage" />
                <p className=' text-center font-semibold text-lg'>{name}</p>
                <p className=' text-center'>{designRating}</p>
            </div>
            <div className=' col-span-2 flex items-center'>
                <p className=' text-justify '>
                    {review}
                </p>
            </div>
        </div>
    );
};

export default HomeReview;