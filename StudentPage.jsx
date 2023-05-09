import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { questionsState } from './atom';
import Routing from './Routing';

const StudentPage = () => {
  const [questions, setQuestions] = useRecoilState(questionsState);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numCorrect = questions.filter((question, i) => {
      return answers[i] === question.answerIndex;
    }).length;
    alert(`You got ${numCorrect} out of ${questions.length} questions correct!`);
  };

  return (
    <div>
      <Routing/>
      <h1>Student Page</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, i) => (
          <div key={i}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, j) => (
                <li key={j}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${i}`}
                      value={j}
                      onChange={() => handleAnswer(i, j)}
                      checked={answers[i] === j}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentPage;
