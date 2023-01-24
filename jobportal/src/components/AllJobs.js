import React,{useState,useEffect} from 'react'
import './AllJobs.css'
import Header from './Header';
function AllJobs()
{
    return(
        <>
        <div className='alljobhead'>
        <Header></Header></div>
       {/* <div className='header'></div> */}
       <div className='section1'><h5>snapshot</h5></div>
       <div className='section2'>
        <div className='frame2'>
        <div className='frameone1'>
            <div className='frameimg' ><img className='frameimg' src="./jobstart.png"/></div>
            <div className='frametext'>All Jobs 100</div>
            <div className='frametext'>==</div>
            <div></div>
        </div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./jobstart.png"/></div>
            <div className='frametext'>Eligible Jobs 100</div>
            <div className='frametext'>==</div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./appliedjob.png"/></div>
            <div className='frametext'>Applied Jobs 100</div>
            <div className='frametext'>==</div></div>
<div className='frameone11'></div>
        </div>
       </div>
       <div className='section1'><h5>Shortlisted</h5></div>
       <div className='section4'>
       <div className='frame2'>
        <div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./shortlisted.png"/></div>
            <div className='frametext'>Shortlisted 100</div>
            <div className='frametext'>==</div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./interviewing.png"/></div>
            <div className='frametext'>Interviewing 100</div>
            <div className='frametext'>==</div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./reject.png"/></div>
            <div className='frametext'>Rejected 100</div>
            <div className='frametext'>==</div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./offer.png"/></div>
            <div className='frametext'>Offer Received 100</div>
            <div className='frametext'>==</div></div>
</div>
       </div>
       <div className='section1'><h5>All Jobs</h5></div>
    <div className='section5'>
        <input type="text"  className='section5box'></input>
        <button className='section5search'>Search</button>
    </div>
       <div className='section6'> 
       <div>
       <select className='section6dropdown' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <select className='section6dropdown' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <select className='section6dropdown' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <select className='section6dropdown' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <select className='section6dropdown' name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
       </div>
       </div>
       <div className='section7'>
        <div className='section7box'>
<div className='seventext'>JPC -1692<button className='apply7'>Applied</button></div><div></div>
<div className='secondseventext'>
<div className='sevenimage'><img className='sevenimage' src='./location.png'></img></div><div className='secondseventextin'>Mumbai</div><div className='secondseventextin'><div><img className='sevenimage' src='./dollar.png'></img></div></div>

<div ><p className='paraseven'>loraal fsfgfgfgfgfgfgfg</p></div>
</div>

        </div>
       </div>
       <div className='section8'>
        <div className='section8box'>
        <div className='seventext'>JPC -1692<button className='apply7'>Applied</button></div>
<div className='secondseventext'>
<div><img className='sevenimage' src='./location.png'></img></div><div className='secondseventextin'>Mumbai</div><div className='secondseventextin'><div><img className='sevenimage' src='./dollar.png'></img></div></div>
<div ><p className='paraseven'>loraal fsfgfgfgfgfgfgfg</p></div>
        </div>
       </div>

       </div>





        
       </>
        

    )
}
export default AllJobs;