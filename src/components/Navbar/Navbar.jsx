import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-blue-700 text-blue-50 py-2'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold'>IDEAL WADDLE</div>
                <div className='flex gap-x-5'>
                    <NavLink to={"/topics"}>Topics</NavLink>
                    <NavLink to={"/statistics"}>Statistics</NavLink>
                    <NavLink to={"/blog"}>Blog</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;