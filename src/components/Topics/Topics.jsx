import React from 'react';

const Topics = () => {
    return (
        <div>
            <div className='w-full flex items-center'>
                <div className='w-1/2 m-10'>
                    <h2 className='text-3xl font-bold text-blue-700'>Lorem ipsum dolor sit amet.</h2>
                    <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore libero debitis, veniam vel est cum aspernatur. Praesentium, corporis consequuntur?</p>
                    <button className='bg-blue-700 text-blue-50 rounded-md px-5 py-1'>Click Me</button>
                </div>
                <div className='w-1/2 h-80 bg-blue-700 m-10 border rounded-md flex justify-center items-center'>
                    <h2 className='text-5xl text-blue-50'>IMAGE</h2>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Topics;