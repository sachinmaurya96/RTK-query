import React from 'react'
import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery,useUpdateAccountMutation } from './slice/adminSlice'
function Admin() {
 const {data,error,isLoading} =    useGetAccountsQuery()
 const [addAccount,response] = useAddAccountMutation()
 const [deleteAccount] = useDeleteAccountMutation()
 const [updateAccount] = useUpdateAccountMutation()
  return (
    <div>
        <h1>Admin data</h1>
       <h2>
        {
            data && data.map((elem,i)=>{
                return(
                    <p key={i}>ID : {elem.id},  Amount : {elem.amount}
                     <button onClick={()=>deleteAccount(elem.id)}>delete Account</button>
                     <button onClick={()=>updateAccount({id:elem.id,amount:50000})}>update Account</button>
                    </p>
                )
            })
        }
       </h2>
       <button onClick={()=>addAccount(100 ,data.length + 1)}>Add Account</button>
    </div>
  )
}

export default Admin
