import { Button, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import "../../Data/Categories"
import Categories from '../../Data/Categories'
import "../Home/Home.css"
import { useNavigate } from "react-router-dom"
import ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";

const Home = ({name , setName , fetchQuestions}) => {

  const [category , setCategory] = useState("");
  const [difficulty , setDifficulty] = useState("");
  const [error , setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
      if(!category || !difficulty || !name){
        setError(true);
        return;
      }else{
        setError(false);
        fetchQuestions(category , difficulty);
        navigate("/quiz");
      }  
  }
  return (
    <div className='content'>
         <div className='settings'>
            <span style={{fontSize : 30}}>Quiz Setting</span>

            <div className=" settings__select">
               
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

              <TextField style={{marginBottom :30}} label="Enter your name" variant='outlined' onChange={(e)=>setName(e.target.value)}/>
              <TextField style={{marginBottom :30}} select label="Select Category" variant = "outlined" onChange={(e)=> setCategory(e.target.value)} value={category}> 
                  {
                    Categories.map((cat) => (
                      <MenuItem key= {cat.category} value={cat.value}>
                         {cat.category}
                      </MenuItem>
                    ))
                  }
               </TextField>
               <TextField style={{marginBottom :30}} select label = "Select Difficulty" variant='outlined' onChange={(e)=> setDifficulty(e.target.value)} value={difficulty}>
                 <MenuItem key="Easy" value="easy">
                           Easy
                 </MenuItem>
                 <MenuItem key="Medium" value="medium">
                           Medium
                 </MenuItem>
                 <MenuItem key="Hard" value="hard">
                           Hard
                 </MenuItem>   
               </TextField>

               <Button variant='contained' color='primary'
                onClick={handleSubmit}
               >
                    Start Quiz
               </Button>
            </div>
         </div>
    </div>
  )
}

export default Home