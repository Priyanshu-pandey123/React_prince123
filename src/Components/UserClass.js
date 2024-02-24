

import React from "react";
import { ReactDOM } from "react-dom/client";


class UserClass extends React.Component{

    constructor(props){
        super(props)
        
        //console.log(this.props.no,"children constructor");
        
        this.state={
           userInfo:{
            name:"null",
            location:'null',
            avatar_url:"null"
           }
        };
    }

     async componentDidMount(){
       // console.log(this.props.no,"child component did mount")
       const data=await fetch("https://api.github.com/users/Priyanshu-pandey123");
       const json=await data.json();
      
       this.setState(
        {
       userInfo:json,

        } );
    console.log(json);

}

    render(){
        const {name,login,avatar_url}=this.state.userInfo;
        
        return (
        <div className="class-component">

        <img  style={image}
        src={avatar_url}
        />
        <h1>Name:{name}</h1> 
        <h1>Location:{login}</h1> 

        </div>
   ) 
}
}
export default UserClass;
 

const image={
    height:"100px",
    width:"100px",
    borderRadius:"50%",
    marginTop:"10px",

}