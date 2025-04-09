import React, { useState } from 'react';
import Button from '../../UI/Button';
import './CourseInput.css';

const CourseInput = ({ onAdd }) => {
  //입력창 상태 변수
  const [enteredText, setEnteredText] = useState('');
  //입력값이 유효한지에 대한 상태변수
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enteredText.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    onAdd({
      id: Math.random().toString(),
      text: enteredText,
    }); // 부모에게 데이터 전달 (함수 호출)
    //전송이 끝나면 입력창 비우기
    setEnteredText('');
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;

    //입력값 검증
    if (inputValue.trim().length > 0) {
      setIsValid(true); //뭐라도 작성이 되었다면 유효한 값.
    } else setIsValid(false);

    setEnteredText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        <input type='text' value={enteredText} onChange={handleInput} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
