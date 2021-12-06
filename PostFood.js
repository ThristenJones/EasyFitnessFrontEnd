import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostFood = () => {

    const [food, setFood] = useState  ('')
    

     const handleChange = (event) => {
         setText(event.target.value)
         console.log(text)
     }

     const handleSubmit = (event) => {
         event.preventDefault()
         const meal = {
             food: food,
             
         }

            axios.post('http://localhost:5000/api/comments/', comment)
           .then(response => console.log(response.data))
    
        }
        return (
            <form onSubmit = {handleSubmit}>
            <label>Add a comment</label>
            <input onChange = {handleChange} value = {text}/>
            <button type ="submit">POST COMMENT</button>
        </form>
        )
}

export default PostComment;