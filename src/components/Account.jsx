import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement, getuseraccont } from './slice/accountSlice'
function Account() {
    const amount = useSelector(state=>state.account.amount)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Amount : {amount}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(getuseraccont(1))}>user</button>
    </div>
  )
}

export default Account
