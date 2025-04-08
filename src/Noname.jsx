import React from 'react';

const Noname = (props) => {
  console.log('Noname Component!');
  console.log(props);

  return <div>{props.children}</div>;
};

export default Noname;
