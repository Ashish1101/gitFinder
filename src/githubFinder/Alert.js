import React, { useContext } from 'react';
import AlertContext from '../context/Alert/AlertContext';
const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert !== null && (
      <div style={type}>
        <i className='fas fa-info-circle'></i>
        {alertContext.alert.msg}
      </div>
    )
  );
};

const type = {
  backgroundColor: 'grey',
  padding: '10px 0px',
  color: 'white',
  textAlign: 'center',
};

export default Alert;
