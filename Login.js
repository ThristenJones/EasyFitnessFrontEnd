import React from "react";
import {Form} from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



const Login = () => {

    



    let navigate = useNavigate();
    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user= {
            email: email,
            password: password,
            }
            axios.post('http://localhost:5000/api/auth/login', user)
            .then(response => localStorage.setItem('token', response.data))
            navigate('/profile', {replace:true});
    }

    
    return (
       
        <div className = "col-sm-6 offset-sm-3">
            
            
            <Form onSubmit = {handleSubmit}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required onChange = {handleEmailChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required onChange = {handlePasswordChange}/>
    
  </Form.Group>
    <button className = 'btn btn primary' >Submit</button>
    <AutoAwesomeIcon/>
</Form>
<a href = "/register"> Not already a user?</a>
        </div>
        
    )

}

export default Login;