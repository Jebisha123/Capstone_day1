import React,{useState,useEffect} from 'react'
import './Login.css'
function Login()
{
    return(
        <div>
        <div className='heading'>
<h1>JOB PORTAL</h1>
        </div>
        <div className='qbox'>
            <div>
                LOGIN
            </div>
            <div>
                <br></br>
                <br></br>
            <label for="email"><b>Email:  </b></label>
<input className='txtbox'  type="text" name="email" placeholder='email'/>
<br></br>
<br></br>
</div>
<div>
<label for="Password"><b>Password:  </b></label>
<input className='txtbox' type="text" name="password" placeholder='password'/>
<br></br>
<br></br>
</div>
<div>
<input className='btn' type="submit"/>
</div>
</div>
        </div>
    )

}
export default Login;