

import React from "react"
import ReactDOM from "react-dom/client";
import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
        <h1  style={divStyle}> Oops hey buddy you got a wrong Routes!</h1> 
        <h2 style={divStyle}>{err.status}</h2>
        <h2 style={divStyle}>{err.statusText}</h2>
    
        </div>
    )
}

const divStyle  ={
    margin:'40px',
    color: 'red',
    padding: '10px',
   fontSize:'30px'
  }
 


  export default Error;