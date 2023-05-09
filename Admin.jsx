import React from 'react';
import { useRecoilState } from 'recoil';
import { questionsState } from './atom';
import Routing from './Routing';

const AdminPage = () => {
  const [questions, setQuestions] = useRecoilState(questionsState);
  const [newQuestion, setNewQuestion] = React.useState({
    question: '',
    options: [],
    answer: ''
  });

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ question: '', options: [], answer: '' });
  };

  return (
    <div>
      <Routing/>
      <h1>Admin Page</h1>
      <div>
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
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={newQuestion.question}
          onChange={e => setNewQuestion({ ...newQuestion, question: e.target.value })}
        />
      </div>
      <div>
        <label>Options:</label>
        <input
          type="text"
          value={newQuestion.options.join(',')}
          onChange={e => setNewQuestion({ ...newQuestion, options: e.target.value.split(',') })}
        />
      </div>
      <div>
        <label>Answer:</label>
        <input
          type="text"
          value={newQuestion.answer}
          onChange={e => setNewQuestion({ ...newQuestion, answer: e.target.value })}
        />
      </div>
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default AdminPage;
