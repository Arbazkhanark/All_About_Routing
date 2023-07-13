import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Page404</h1>
      {/* <Link to="/">Go to Home</Link> */}
      <button onClick={()=>navigate("/")} >Go to Home</button>
      <button onClick={()=>navigate(-1)}>BACK</button>  
      <button onClick={()=>navigate(1)}>NEXT</button>
    </div>
  )
}

export default Page404