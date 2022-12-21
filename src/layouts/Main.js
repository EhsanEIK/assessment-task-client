import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div>
                <Link to='/layout1' className="btn bg-[#E0E0E0] text-black border-[#E0E0E0] rounded-full normal-case hover:text-white px-10">Layout 1</Link>
                <Link to='/layout2' className="btn bg-[#E0E0E0] text-black border-[#E0E0E0] rounded-full normal-case hover:text-white px-10 mx-2">Layout 2</Link>
                <Link to='/layout3' className="btn bg-[#E0E0E0] text-black border-[#E0E0E0] rounded-full normal-case hover:text-white px-10">Layout 3</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;