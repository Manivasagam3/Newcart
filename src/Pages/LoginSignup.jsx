import React from 'react'
import './CSS/Login.css'
const LoginSignup = () => {
  return (
    <div className='log'>
    <form action="">
    <h1>LOGIN</h1>
    <label htmlFor="user">username</label>
    <input type="text" /><br />
    <label htmlFor="pass">password</label>
    <input type="password" /><br />
    <button>login</button>

    <a id="a2" href="#">Forgot password???</a>
  </form>
  </div>
  )
}

export default LoginSignup;
