import React from 'react'
import './NewLetter.css'
const NewLetter = () => {
  return (<div>
    <div className='newletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>subscribe to our newletter and stay updated</p>
      <div className='newletters'>
        <input type='email' placeholder='your email id' />
        <button>subscribe</button>
    </div>
    </div>
    
    </div>
  )
}

export default NewLetter
