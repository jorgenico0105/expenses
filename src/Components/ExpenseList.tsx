import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
    const {state}=useBudget()

   

    const filter =state.currentCate ? state.expenses.filter(exp=>exp.category===state.currentCate) : state.expenses
    const isEmpty=useMemo(()=>filter.length===0,[state.expenses])
    
    
  return (
   
            <div className="mt-10">
        
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>: (
            <>
            <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
            <div className="shadow-lg">
            {filter.map(expense => (
                <ExpenseDetail 
                key={expense.id}
                expense={expense}
                ></ExpenseDetail>
            ))}
            </div>
            </>
            )}
            </div> 
  )
}
