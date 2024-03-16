import React from 'react'
import '../SignInPage/SignInPage.css'


export default function SignInPage() {
  return (



    <div className='row' id='divL'>
    <div className='col-2'>
      <div className='colorBox'></div>
    </div>
    <div className='LoginDetailsBox  col-10'>

      <div className='row'>

        <div className='col-4 '>
          <div className='image'></div>
        </div>

        <div className='col-6'>
          <span className='class'><span>S</span>USIP <span>O</span>NE </span>

          <span className='center'>High Education Center </span>
          
          <hr className='SignUpHr'></hr>
          <div className='information'>
          <h5>Sign In</h5>
          <table>
            <tr>
              <td>
                 User Name :
              </td>
              <td>
                <input type='text' className='textBox'/>
              </td>
            </tr>

           
            <tr>
              <td>
                Password :
              </td>
              <td>
                <input type='password' className='textBox'/>
              </td>
            </tr>
            <br/>
            <br/>
            <tr>
              <td>
                
              </td>
              <td>
                <button  className='textBox' id='btn1'>Sign In</button>
              </td>
            </tr>
          </table>
          </div>
          

        </div>

      </div>

    </div>


 
  </div>
/*
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
          <button className='button'> Sign In</button>
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

*/

  )
}
