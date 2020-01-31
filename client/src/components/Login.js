import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState({username: '', password: ''});

  const {history} = props;

  const handleChange = e =>
  {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  }

  const login = e =>
  {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', loginInfo)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/bubble-page');
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
     <div className='login-form'>
       <h1>Login</h1>

       <form className='form-group' onSubmit={login}>
         <label htmlFor='username'>Username:</label>
         <input
            type='text'
            name='username'
            value={loginInfo.username}
            onChange={handleChange}/>

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              value={loginInfo.password}
              onChange={handleChange}/>

              <button>Login</button>
       </form>
     </div>
    </>
  );
};

export default Login;
