import React from 'react';
import {Link} from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, logo, name, total} = topic;
    return (
        <div className='bg-blue-200 rounded-md'>
            <img src={logo} alt="topic-image" className='w-full bg-blue-800 rounded-md' />
            <div className='p-3'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='my-3'>Total Questions: {total}</p>
                <Link to={`/${id}`}>
                    <button className='w-full bg-blue-700 text-blue-50 rounded-md px-5 py-1'>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;