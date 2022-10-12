import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>
            <div className='w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center'>
                <div className='w-11/12 mx-auto lg:w-1/2 m-10'>
                    <h2 className='text-3xl font-bold text-blue-700'>Lorem ipsum dolor sit amet.</h2>
                    <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore libero debitis, veniam vel est cum aspernatur. Praesentium, corporis consequuntur?</p>
                    <button className='bg-blue-700 text-blue-50 rounded-md px-5 py-1'>Click Me</button>
                </div>
                <div className='w-full lg:w-1/2 h-80 bg-blue-700 m-10 border rounded-md flex justify-center items-center'>
                    <h2 className='text-5xl text-blue-50'>IMAGE</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 m-10'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;