import React from 'react';
import '../App.css';
const Card = ({ user_name , id, user_email}) => {
    return(

        
        <div style={{width: '350px', height:'300px',display:'inline-block', border: '20px',backgroundColor:'#bf80ff',marginLeft: '50px',paddingBottom:'30px',margin:'20px',boxShadow:'0px 3px 3px 0px',color:'black',marginBottom: '80px;'}} className="grid-item">
            <img src={`https://reqres.in/img/faces/${id}-image.jpg`} height="75%" width="100%"/>

            <div className="user_disp">
                <br />
                <h2>{user_name}</h2>
                
                <h4 style={{marginLeft:'-15px'}}>{user_email}</h4> <br></br>
            </div>
            <br /> <br /> 
            <br></br>
            <br></br>
        </div>
        
    );
}

export default Card;