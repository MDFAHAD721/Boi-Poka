import React from 'react';
import BannerImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between w-11/12 mx-auto items-center bg-[#F4F4F4] rounded-lg px-3 md:px-20 py-3 md:py-10 my-10'>
            <div className='w-full md:w-1/2 text-center md:text-left'>
                <h1 className='text-2xl md:text-5xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className="btn mt-2 md:mt-10 bg-[#23BE0A] text-white rounded-lg">View The List</button>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-1/2 flex justify-end'>
                <img className='rounded-lg' src={BannerImage} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;