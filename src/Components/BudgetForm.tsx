import {  useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm() {
    const [budget,setBudget]=useState(0)
    
    const {dispatch}=useBudget()

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setBudget(e.target.valueAsNumber)
    }
    const isValid = useMemo(()=>{
        return isNaN(budget) || budget <= 0
    },[budget])
    const handleSubmit=(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch({type:"add-budget",payload:{budget}})

    }
    return (
    <form className='space-y-5' onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-5'>
            <label htmlFor="budget" className='text-4xl text-blue-600 font-bold text-center' >Definir Presupuesto</label>
            <input value={budget} onChange={handleChange} type="number" className='w-full bg-white border border-gray-200 p-2' name='budget' placeholder='Define tu Presupuesto' />
        </div>
       <input  type="submit" value='Definir Presupuesto' className='bg-blue-600 hover:bg-blue-700 cursor-pointer p-3 uppercase text-white font-black disabled:opacity-10
       w-full' disabled={isValid} />
    </form>
  )
}
