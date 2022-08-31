import React from 'react'
import Cards from "../components/Cards"
import {useSelector} from "react-redux"

function Home() {
  const {goals}=useSelector((state)=>state.goals)
  return (
    <>
    <h1>Home</h1>
    {goals.length>0?( <Cards/>):(<p>No Blogs To Show</p>)}
    
   
    </>
  )
}

export default Home