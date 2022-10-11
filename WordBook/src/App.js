import'./App.css';
import React from 'react';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateDay from './component/CreateDay';

function App() {
 return (
  <BrowserRouter>
    <div className="App">
      
      <Header />
      <Routes>
      <Route path="/" element={<DayList/>} />
      {/* 그냥 /는 첫페이지를 의미 */}
      
      <Route path="/day/:day" element={<Day/>} />
      {/* 콜론을 붙여주면 day 1로 들어왔을 때 day 라는 변수로 1의 값을 얻을수 있음 */}
      
      <Route path="*" element={<EmptyPage/>} />
      <Route path="/create_word" element={<CreateWord/>} />
      <Route path="/create_day" element={<CreateDay/>} />
      </Routes>
      </div>
      </BrowserRouter>
      

     
      

  );
}

export default App;
