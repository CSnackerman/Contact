import React from 'react';
import Title from "./Title";
import MyEmail from "./MyEmail";
import MyPhoneNumber from "./MyPhoneNumber";

import './App.scss'

const App = () => {
  return (
      <div className={'App'}>
        <Title />
        <MyEmail />
        <MyPhoneNumber />
      </div>
  );
}

export default App;
