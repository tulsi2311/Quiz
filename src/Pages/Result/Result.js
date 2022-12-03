import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Result/Result.css"
const Result = ({score , name , setScore}) => {

  const navigate = useNavigate();

  useEffect(()=>{
      if(!name){
            navigate("/")
            setScore(0);
      }
  }, [name , navigate])

  const handleClick = () =>{
       navigate("/")
       setScore(0);
  }
  return (
    <div className='result'>
      <span className="title">
        Final Score : {score}
      </span>
      <Button
          variant = "contained"
          color='secondary'
          size = "large"
          style = {{alignSelf : "center" , marginTop:20}}
          onClick={handleClick}
      > Go to Home page</Button>
    </div>
  )
}

export default Result