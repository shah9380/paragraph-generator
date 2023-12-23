
import { useState } from 'react';
import './App.css';
import Button from './assets/Button';
import InputPart from './assets/Input';
import Main from './assets/Main';

function App() {
  let[number,setNumber]=useState(2);
  function callData(data){
      setNumber(data);
  }
  return (
    <div className="App bg-emerald-300 min-h-screen" >
      <div className='max-w-[1200px] mx-auto text-start leading-[2rem]'>
          <h1 className='text-3xl py-4 text-center font-medium text-rose-900'>TIRED OF BORING LOREM IPSUM</h1>
          <InputPart demoProp={callData}></InputPart>
        <Main nums={number}></Main>
      </div>
    </div>
  );
}

export default App;
