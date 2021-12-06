import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import { response } from 'react';
import  {Card, Button,  
} from 'react-bootstrap';


const UserGoals = (props) => {
    const [goal, setGoal] = useState([]);
    const jwt = localStorage.getItem('token');

    console.log(props.user);

    useEffect(() => { 
        if (props.user)
        {axios.get(`http://localhost:5000/api/users/${props.user._id}`)
        .then(res => {
            setGoal(res.data.goal);
        
        })}
        
    }, [props.user]);

    const handleClick = (props) => {
        if(props.user)
        {axios.delete(`http://localhost:5000/api/users/goals/${props.user._id}`)}
    }
    

    return (

        <div>
        
        
        <Card>
        {/******* LOGIC FOR THE USER WHO MADE POST ******/}
            <Card.Header as="h5">{props.user.name}:</Card.Header>
            <Card.Body>
        {/****** LOGIC FOR USERS POST ******/}
                <Card.Title>Fitness Goals:</Card.Title>
                <Card.Text>
                    <div>
                        <ul>
                            {goal && goal.map((goal) => {
                                return(
                                    <li key={goal.id}>
                                        {goal.goal}
                                        <br></br>
                                        <Button variant="primary" type= "delete" onClick={() => handleClick()}>Delete Goal</Button>
                                        <hr></hr>     
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
               </Card.Text>
                
            </Card.Body>
            </Card>
            </div>
    );
}

export default UserGoals;