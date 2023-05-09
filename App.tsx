import React from 'react';
import { RecoilRoot } from 'recoil';
import AdminPage from './Admin'
import StudentPage from './StudentPage'


const App = () => {
  return (
    <RecoilRoot>
      
        <AdminPage />
        <StudentPage />
      
    </RecoilRoot>
  );
};

export default App;
