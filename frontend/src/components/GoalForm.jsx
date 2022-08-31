import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {createGoal} from "../features/goals/goalSlice"
function GoalForm() {
   const[text,setText]=useState('')
const dispatch=useDispatch()
    
      
const onSubmit=(e)=>{
    e.preventDefault()
    dispatch(createGoal({text}))
    setText('')
    }

  return (
    <div className="form-group">
    <form onSubmit={onSubmit}>
<input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Title"/>



<button className='btn btn-block'> Submit Your Blog</button>
    </form>
  </div>
  )
}

export default GoalForm