import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Logout from './Logout';


function App() {


    const [user, setUser] = useState(null);
    const jwt = localStorage.getItem('token');
    useEffect(() =>{
        try {
            const user = jwt_decode(jwt);
            setUser(user)
            console.log(user)
        } catch {

        }
    }, [jwt]);

    return (
        <BrowserRouter>
        <div className='App'>
           <NavBar user = {user}/>
        </div>
        <Routes>
            <Route path = "/" exact element = {<Home user = {user}/>} />
            <Route path = "/login" element = {<Login/>} />
            {user && <Route path = "/profile" element = {<Profile user = {user}/>}  />}
            <Route path = "/register" element = {<Register/>} />
            <Route path = "*" element = {<NotFound/>}  />
            <Route path = "/logout" element ={<Logout/>} />
        </Routes>
       
        

        </BrowserRouter>
    );
}

export default App;