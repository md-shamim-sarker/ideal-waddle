import {useState} from "react";

const Question = ({question, serial}) => {
    const {id, correctAnswer, options} = question;
    const [ans, setAns] = useState(false);

    const correctAnswerHandler = (event) => {
        const userAnswer = event.target.innerHTML;
        const isCorrect = userAnswer.includes(correctAnswer);
        setAns(isCorrect);
        isCorrect ? event.target.className = "px-3 py-1 rounded-2xl bg-blue-500" : event.target.className = "px-3 py-1 rounded-2xl bg-red-500";
    };

    return (
        <div>
            <h2 className="font-bold mb-5">Question {serial + 1}: {question.question}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                {
                    options.map(option => <Option
                        key={options.indexOf(option)}
                        sl={options.indexOf(option)}
                        option={option}
                        correctAnswerHandler={correctAnswerHandler}
                        ans={ans}
                    ></Option>)
                }
            </div>
        </div>
    );
};

const Option = ({option, sl, correctAnswerHandler, ans}) => {

    let serial;
    if(sl === 0) {
        serial = 'A. ';
    } else if(sl === 1) {
        serial = 'B. ';
    } else if(sl === 2) {
        serial = 'C. ';
    } else if(sl === 3) {
        serial = 'D. ';
    } else {
        serial = 'E. ';
    }

    return (
        <div onClick={correctAnswerHandler}>
            <div className="bg-blue-200 px-3 py-1 rounded-2xl cursor-pointer hover:bg-blue-500">
                {serial} {option}
            </div>
        </div>
    );
};

export default Question;