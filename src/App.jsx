import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CouresItem from './components/CourseGoals/CourseItem';
import CourseList from './components/CourseGoals/CourseList';

const App = () => {
  //목표 데이터들의 상태 관리 배열
  const [goals, setGoals] = useState([]);

  //CourseInput에게 전달할 함수
  const onAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const onDeleteGoal = (id) => {
    setGoals(goals.filter((item) => item.id !== id));
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={onAddGoal} />
      </section>
      <section id='goals'>
        <CourseList onDelete={onDeleteGoal} items={goals} />
      </section>
    </div>
  );
};

export default App;
