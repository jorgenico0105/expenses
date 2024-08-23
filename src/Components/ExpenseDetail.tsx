import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import Amount from "./Amount"
import { categories } from "../data/categories"
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { useBudget } from "../hooks/useBudget"

type ExpenseProps={
    expense:Expense
}

export default function ExpenseDetail({expense}:ExpenseProps) {
  const {dispatch}=useBudget()

  const categoryInfo=useMemo(()=> categories.filter(cat=>cat.id===expense.category)[0] ,[expense])
  const leadingActio=()=>(
    <LeadingActions>
        <SwipeAction
        onClick={()=>{dispatch({type:'get-expense-by-id',payload:{id:expense.id}})}}
        >
            Eliminar
        </SwipeAction>
    </LeadingActions>
)
const trailingActio=()=>(
    <TrailingActions>
        <SwipeAction
        onClick={()=>dispatch({type:'remove-expense',payload:{id:expense.id}})}
        destructive={true}
        >
            Actualizar
        </SwipeAction>
    </TrailingActions>
)
  return (
  <SwipeableList>  
    <SwipeableListItem
      maxSwipe={1}
      leadingActions={trailingActio()}
      trailingActions={leadingActio()}
    >
        <div className="bg-white  p-5 w-full border-b border-gray-200 flex gap-5 rounded-lg items-center ">
              <div>
                <img src={`/icono_${categoryInfo.icon}.svg`} alt="icon" className="w-20"/>
              </div>
            <div className="flex-1 space-y-2">
              <p className="text-sm font-bold text-slate-500 uppercase">{categoryInfo.name}</p>
              <p>{expense.expenseName}</p>
              <p className="text-slate-600 text-sm ">{ formatDate(expense.date!.toString())}</p>
            </div>
            <Amount
            amount={expense.amount}
            >
            </Amount>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
