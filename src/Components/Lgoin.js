import axios from 'axios';
import { useState } from 'react';

const PORT = 4000;
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:${PORT}/api/users/login`,
        {
          email,
          password,
        }
      );
      const data = response.data;
      window.localStorage.setItem('token', data.token);
    } catch (error) {
      console.log('Error from login');
      console.log(error);
      console.log('#'.repeat(50));
      console.log(error.message);
      console.log('#'.repeat(50));
    }
  };
  return (
    <>
      <form onSubmit={handelLogin}>
        <div>
          <label htmlFor='email'>email: </label>
          <input
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>password: </label>
          <input
            id='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </>
  );
}
