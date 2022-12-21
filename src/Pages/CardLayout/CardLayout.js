import React from 'react';

const CardLayout = () => {
    return (
        <div className='grid grid-cols-8 gap-5 mt-8'>
            <div className='bg-[#DA1E5D] text-white text-center rounded-lg col-span-8 py-8'>
                <h1>Card1</h1>
            </div>
            <div className='bg-[#DA1E5D] text-white rounded-lg col-span-2 h-72 flex items-center justify-center py-5'>
                <h1>Card2</h1>
            </div>
            <div className='bg-[#DA1E5D] text-white rounded-lg col-span-4 h-72 flex items-center justify-center py-5'>
                <h1>Card3</h1>
            </div>
            <div className='bg-[#DA1E5D] text-white rounded-lg col-span-2 h-72 flex items-center justify-center py-5'>
                <h1>Card4</h1>
            </div>
            <div className='bg-[#DA1E5D] text-white text-center rounded-lg col-span-8 py-8'>
                <h1>Card5</h1>
            </div>
        </div>
    );
};

export default CardLayout;