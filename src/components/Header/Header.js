import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <nav className=' bg-black px-2 py-3'>
            <div className=' grid grid-cols-4 w-3/4 mx-auto'>
                <div className="logo">
                  <FontAwesomeIcon icon={faLaptop} size="4x" color='white'></FontAwesomeIcon>  
                </div>
                <div className="linkItem col-span-3 flex justify-between items-center align-middle">
                    <CustomLink className=' text-white hover:text-red-500 text-lg font-semibold text-center' to={'/'}>Home</CustomLink>
                    <CustomLink className=' text-white hover:text-red-500 text-lg font-semibold text-center' to={'/review'}>Reviews</CustomLink>
                    <CustomLink className=' text-white hover:text-red-500 text-lg font-semibold text-center' to={'/dashboard'}>Dashboard</CustomLink>
                    <CustomLink className=' text-white hover:text-red-500 text-lg font-semibold text-center' to={'/blog'}>Blog</CustomLink>
                    <CustomLink className=' text-white hover:text-red-500 text-lg font-semibold text-center' to={'/about'}>About Us</CustomLink>
                    
                </div>
            </div>
        </nav>
    );
};

export default Header;