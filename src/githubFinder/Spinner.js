import React from 'react';

const Spinner = () => {
  return (
    <React.Fragment>
      <i className='fas fa-spinner' style={gem}></i>
    </React.Fragment>
  );
};

const gem = {
  margin: '0px auto',
};

export default Spinner;
