import { atom } from 'recoil';

export const questionsState = atom({
  key: 'questionState',
  default: [
    {
      question: "What is React.js?" ,
      options: [ 'a) Open-source JavaScript back-end library',
          'b) JavaScript front-end library to create a database' ,
          'c) Free and open-source JavaScript front-end library' ,
          'd) None of the mentioned'], 
      answer: 'c) Free and open-source JavaScript front-end library'
    },
    {
      question: "Which of the following is used to pass data to a component from outside in React?",
      options: [ 'a) props',
          'b) render with arguments' ,
          'c) setState' ,
          'd) PropTypes'], 
      answer: 'a) props'
    },
    {
      question: "Which of the following is correct about prop in react?",
      options: [ 'a) Can be changed inside another component',
          'b) Can be changed inside the component' ,
          'c) Cannot be changed in the component' ,
          'd) All of the mentioned'], 
      answer: 'c) Cannot be changed in the component'
  },{
      question: "Which of the following is method is not a part of ReactDOM?",
      options: [ 'a) ReactDOM.hydrate()',
         ' b) ReactDOM.destroy()' ,
        " c) ReactDOM.createPortal()" ,
          'd) All of the mentioned'], 
      answer:  'b) ReactDOM.destroy()'
  },{
      question: "Which of the following command is used to Install create-react-app?",
      options: [ 'a) npm install create-react-app',
                 "b) npm install -f create-react-app",
                 "c) npm install -g create-react-app",
              "d) install -g create-react-app"], 
      answer: "c) npm install -g create-react-app"
  },{
      question:  "How many elements can a valid react component return?",
      options: [ 'a) React doesn’t return element',
          'b) 1 Element',
          'c) More than 1 element',
          'd) None of the mentioned'], 
      answer: 'b) 1 Element'
  },
  ]
});
