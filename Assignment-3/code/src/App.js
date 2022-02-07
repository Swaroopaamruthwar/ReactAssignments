import React from 'react';
import './App.css';
var arrow = "<";
var arrowRight = ">";
var date=new Date().toLocaleDateString();
const employee = {
  Name: 'Alan Ford',
  EmployeeId: '0000512',
  Appointment: '9:00 (24-05-2016)',
  Email: 'alan.ford@gmail.nl',
  Phone: '+31123456789',
  Status: 'In Progress',
  Door: 'Mark',
  Time: new Date().toLocaleTimeString(),
  ProfileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function App() {
  return (
    <div className="site-container">
      <header className='page-header'>
        <div>
          <button className='arrow'>{arrow}</button>
        </div>
        <div className='title'>
          <h2>{employee.Name}</h2>
          <p>{employee.EmployeeId}</p>
        </div>
        <div>
          <button className='btn'>Print</button>
        </div>
      </header>
      <div className='customer-info'>
        <p><label><strong>Appointment On</strong> </label>{employee.Appointment}</p>
        <p><label><strong>Email:</strong></label>{employee.Email}</p>
        <p><label><strong>Phone</strong></label>{employee.Phone}</p>
      </div>
      <strong></strong>
      <div className='order-info'>
        <label><strong>Status</strong><ul><li>{employee.Status}</li></ul></label>
        <label><strong>Door</strong><p>{employee.Door}</p></label>
        <label><strong>Time</strong><p>{employee.Time}<span className="date"> ({date})</span> </p></label>

      </div>

      <div className='product-list'>
        <div className='img'>
          <label><input type="checkbox"></input></label>
          <img src={employee.ProfileImg} alt='photo' width='100' height="100" />
        </div>
        <div className='product-info'>
          <h2>Boltaart Bosbessen</h2>
          <p>overheirlijke Boltaart met Bosbessen uit de keuken  van de Bijenkorf</p>
        </div>
        <div><button className='arrow'>{arrowRight}</button></div>
      </div>

    </div>

  );
}

export default App;
























