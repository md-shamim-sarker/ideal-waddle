import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questionsData = useLoaderData().data;
    const {logo, name, total} = questionsData;
    const questions = useLoaderData().data.questions;
    return (
        <div className='my-10'>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <img src={logo} alt="topic_image" className='w-52 bg-blue-800 rounded-3xl' />
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <p>Total Questions: {total}</p>
                </div>
            </div>
            <hr className='my-5 bg-blue-700 h-1' />
            <div className='w-4/5 mx-auto'>
                {
                    questions.map(question => <Question
                        key={question.id}
                        serial={questions.indexOf(question)}
                        question={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Questions;