import React from 'react';
import logo from './logo.svg';
import './App.css';
function App(props) {
  const { employee } = props;
  return (
    <div className="container">
      <img src={employee.profileImg} alt="React" width="100" height="100" id="img" />
      <div class="para">
        <p id="employeeName">{employee.name}</p>
        <p class="key">Location</p>
        <p><strong>{employee.location}</strong></p>
        <p class="key">bloodGroup</p>
        <p><strong>{employee.bloodGroup}</strong></p>
        <p class="key">Age</p>
        <p><strong>{employee.age}</strong></p>
      </div>
    </div>

  );
}
export default App;
