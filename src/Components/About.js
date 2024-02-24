import React from "react"
import ReactDOM from "react-dom/client";
import Contact from "./Contact"; 
import User from "./User";
import UserClass from "./UserClass";





class About extends React.Component{
    
    constructor(props){
        super(props)
        //console.log("parent Constructor ")
    }

    
    componentDidMount(){
        //console.log("Parent component did mount");
    }

    render(){

       // console.log("parent render");
        return(
            <div style={aboutStyle}>
                         <h1>hello this is priyanshu pandey!</h1>
                    <h2>Nice to meet u</h2>
                       <UserClass  />
                       
                     </div>

        )
    }
}


    export default About; 

    const aboutStyle={
        height:'500px',
        widht:'100%',
        color:'black',
        backgroundColor:'cyan'


    }
