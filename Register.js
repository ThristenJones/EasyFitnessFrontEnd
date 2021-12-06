import {Form,Button } from 'react-bootstrap'
import {useState } from 'react'
import axios from 'axios'


const Register = () => {
   
    const [regForm, setRegForm ] = useState({
        name: "",
        email: "",
        password: ""
      })
      const handleChange = (e)=> {
         setRegForm({
           ...regForm, [e.target.name]: e.target.value
         })
      }
     const submitRegister = (e) => {
       e.preventDefault()
       console.log(regForm)
       axios.post("http://localhost:5000/api/users/register", regForm )
       .then(res => console.log(res))
       .then(window.location= "/Login")
     }
    return (
        <div className = "col-sm-6 offset-sm-3">
            <Form onSubmit = {(e) => submitRegister(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name = 'email' type="email" placeholder="Enter email" onChange = {handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>User name</Form.Label>
    <Form.Control name = 'name' type="text" placeholder="User Name" onChange = {handleChange} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name = 'password' type="password" placeholder="Password" onChange = {handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Register;