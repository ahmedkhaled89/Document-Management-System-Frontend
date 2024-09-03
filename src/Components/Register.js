import axios from 'axios';
import { useState } from 'react';

const PORT = 4000;
export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${PORT}/api/users/register`, {
        firstName,
        lastName,
        nationalID,
        email,
        password,
      })
      .then((result) => {
        console.log(result);

        window.location.pathname = '/comingSoon';
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor='firstName'>firstName: </label>
          <input
            id='firstName'
            name='firstName'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='lastName'>lastName: </label>
          <input
            id='lastName'
            name='lastName'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='nationalID'>nationalID: </label>
          <input
            id='nationalID'
            name='nationalID'
            onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>email: </label>
          <input
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <label htmlFor='password'>password: </label>
            <input
              id='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Register</button>
        </div>
      </form>
    </>
  );
}
