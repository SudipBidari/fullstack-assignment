import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e =>{
    e.preventDefault();
    //firebase login
  }
  const register = e =>{
    e.preventDefault();
    //firebase register
  }
  return (
    <div className='login'>
        <Link to='/'>
        <p className='login_logo'>
            Back to home
        </p>
        </Link>
        <div className="login_container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password'value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit' className='login_signInButton' onClick={signIn} >Sign in</button>
          </form>
          <p>
            By signing in you agree to our conditions of use and sales.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Provident laudantium consequatur delectus in accusamus minima 
             illum tenetur, tempore repellendus quam!
          </p>
          <button className='login_registerButton' onClick={register}>Sign up</button>
        </div>
      
    </div>
  )
}

export default Login
