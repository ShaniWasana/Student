import React from 'react'

import '../pages/SignInPage.css'
import SignUpPage from '../SignUpPage/SignUpPage'


export default function SignInPage() {
  return (

    <div className='row image '>
      <div className=' col-4'></div>
      
      <div className=' col-4'>
        <div className='box'></div>
        <div className='LoginDetails'>
         <h4>LOGIN</h4>
        <br />

        <table>
          <tr >
            <span>Username :</span>
            <br/>
          </tr>
          
          <tr>
            <input type='text' text="user name" className='textbox' />
            
            
          </tr>
          
          <tr>
            <span>Password :</span>
            <br />
          </tr>
          <tr>
            <input type='password' className='textbox' />
           
            
          </tr>
          <tr>
            <span className='forget'>forget password ?</span>
          </tr>
          <br/>

          <br />
          
          <tr >
          
          <button className='button' >Sign In</button>
          </tr>
          <tr>
            <span className='Signup'>Don't have an Account ?
              <span id='SignUp'> Sign Up</span>
            </span>
          </tr>


        </table></div>
        </div>
        <div className='col-4'></div>
      
    

    </div>



  )
}
