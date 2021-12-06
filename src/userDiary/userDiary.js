import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import  {Card, Button,  
} from 'react-bootstrap';


const UserDiary = (props) => {
    const [foodDiary, setFoodDiary] = useState([]);
    const jwt = localStorage.getItem('token');

    console.log(props.user._id);

    useEffect(() => { 
        if (props.user)
        {axios.get(`http://localhost:5000/api/users/${props.user._id}`)
        .then(res => {
            setFoodDiary(res.data.foodDiary);
            
        })}
        
    }, [props.user]);

    const handleClick = (name) => {

        const food = {
            name: name,
            
        }
        console.log(food)
         axios.delete(`http://localhost:5000/api/users/foods/${props.user._id}`, food)
    
    }
    

    return (
        <Card>
        {/******* LOGIC FOR THE USER WHO MADE POST ******/}
            <Card.Header as="h5">{props.user.name}</Card.Header>
            <Card.Body>
        {/****** LOGIC FOR USERS POST ******/}
                <Card.Title>Food Diary:</Card.Title>
                <Card.Text>
                    <div>
                        <ul>
                            {foodDiary && foodDiary.map((food) => {
                                return(
                                    <li key ={food.id}>
                                        Name:{food.name}
                                        <br></br>
                                        Seving Size:{food.servingSize}
                                        <br></br>
                                        Protein:{food.protein}
                                        <br></br>
                                        Fats: {food.fats}
                                        <br></br>
                                        Sugars: {food.sugars}
                                        <br></br>
                                        Calories: {food.calories}
                                        <br></br>

                                        <Button variant="primary" type= "delete" onClick={() => handleClick(food.name)}>Delete Food</Button>
                                        <hr></hr>     
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
               </Card.Text>
                
            </Card.Body>
            </Card>

    );
}

export default UserDiary;