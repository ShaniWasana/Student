import React from 'react'

import '../SignUpPage/SignUpPage.css'





export default function SignUpPage() {
  return (
    <>
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
              <h5>Sign Up</h5>
              <table>
                <tr>
                  <td>
                    Name :
                  </td>
                  <td>
                    <input type='text' className='textBox'/>
                  </td>
                </tr>

                <tr>
                  <td>
                    Address :
                  </td>
                  <td>
                    <input type='text' className='textBox'/>
                  </td>
                </tr>

                <tr>
                  <td>
                    NIC :
                  </td>
                  <td>
                    <input type='text' className='textBox'/>
                  </td>
                </tr>
                

                <tr>
                  <td>
                    Contact  :
                  </td>
                  <td>
                    <input type='text' className='textBox'/>
                  </td>
                </tr>
                <tr> <td>
                    Email :
                  </td>
                  <td>
                    <input type='text' className='textBox'/>
                  </td></tr>
                 
               
               
                <tr>
                  <td>
                    Password :
                  </td>
                  <td>
                    <input type='password' className='textBox'/>
                  </td>
                </tr>

                <tr>
                  <td>
                    Confirm Password :
                  </td>
                  <td>
                    <input type='password' className='textBox'/>
                  </td>
                </tr>
                <tr>
                  <td>
                    
                  </td>
                  <td>
                    <button  className='textBox' id='btn'>Sign Up</button>
                  </td>
                </tr>
              </table>
              </div>
              

            </div>

          </div>

        </div>


     
      </div>


    </>








    /*
       <div className='row' id='divL'>
        <div className='col-2'>

        </div>
        <div className='LoginDetailsBox  col-8'>
         
         <div className='row'>
            <div className='col-4 '>
            <div className='image'></div>
            </div>
            <div className='col-4'>
            <span className='class'>SUSIP ONE </span>
           
            <span className='center'>High Education Center </span>
            <h5>SIGN UP</h5>
            <hr className='SignUpHr'></hr>
            </div>
            </div>
        </div>
        <div className='col-2'></div>
      </div>  
    */

  )
}
