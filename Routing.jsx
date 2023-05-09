import  {useNavigate} from 'react-router-dom'
import React from 'react'

const Routing = () =>{
  const navigate = useNavigate()
         const handleAdmin = () =>{
    navigate('/admin')
  }

  const handleStudent = () =>{
    navigate('/student')
  }
  return (
   <div>
   <button onClick= {handleAdmin}> Admin Page</button>
   <button onClick= {handleStudent}> Student Page</button>
   </div>
  )
       
}

export default Routing
