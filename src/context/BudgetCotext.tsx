import { useReducer , createContext, ReactNode,useMemo } from "react"
import { BudgetState, budgetReducer,initialState,BudgetActions } from "../reducers/budget-reducer"

type BudgetContextProps ={
    state:BudgetState
    dispatch: React.Dispatch<BudgetActions>
    gastado: number
    disponible:number
}
type BudgetProviderProps= {
    children: ReactNode
}
export const BudgetContext =createContext<BudgetContextProps>({} as BudgetContextProps)

export const BudgetProvider =({children}: BudgetProviderProps)=>{

    const [state,dispatch]=useReducer(budgetReducer,initialState)
    const gastado=useMemo(()=>state.expenses.reduce((total,expense)=>expense.amount + total,0) ,[state.expenses])
    const disponible=state.budget-gastado
    return (
        <BudgetContext.Provider 
        value={{
            state,dispatch,gastado,disponible
        }}
        >
            {children}
        </BudgetContext.Provider>
    )
}