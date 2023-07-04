import React from 'react'
import { increment,decrement } from './slice/bonusSlice'
import { useDispatch,useSelector } from 'react-redux'

function Bonus() {
  const points = useSelector(state=>state.bonus.points)
  const dispatch = useDispatch()
  return (
    <div>
       <h2>Bonus points : {points}</h2>
       <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Bonus
