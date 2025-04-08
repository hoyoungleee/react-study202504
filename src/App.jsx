import React from 'react';
import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  /*
    jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환
          html처럼 보이지만, 실제 html은 아닙니다.

    - 규칙 :
    1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  */

  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2023, 6, 20) },
  ];

  //자식 컴포넌트의 데이터를 부모 컴포넌트에서 받아내는 방법. (props drilling)
  const addExpenseHandler = (newEx) => {
    console.log('여기는 App.jsx!');
    console.log('자식놈이 준 데이터 : ', newEx);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className='expenses'>
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id} // 반복문을 통해 같은 컴포넌트를 표현할 때, 각각을 구분할 수 있게 해주는 props
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
