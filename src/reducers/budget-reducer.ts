import { Category, DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'


export type BudgetActions =
{type:'add-budget',payload:{budget:number}} |
{type:'show-modal'} |
{type:'hide-modal'} |
{type:'add-expense',payload:{expense:DraftExpense}}|
{type:'remove-expense',payload:{id:Expense['id']}} | 
{type:'get-expense-by-id',payload:{id:Expense['id']}}|
{type:'update-exp',payload:{expense:Expense}} |
{type:'clean-app'}|
{type:'filter-cate',payload:{id:Category['id']}}

export type BudgetState={
    budget:number
    modal:boolean
    expenses:Expense[]
    editExp:Expense['id']
    currentCate:Category['id']
}
const initBudget=() :number=>{
    const localStorageBud=localStorage.getItem('budget')
    return localStorageBud ? +localStorageBud : 0
}
const initExp=() :Expense[]=>{
    const localStorageExp=localStorage.getItem('expenses')
    return localStorageExp ? JSON.parse(localStorageExp) : []
}
export const initialState : BudgetState ={
    budget:initBudget(),
    modal:false,
    expenses:initExp(),
    editExp:'',
    currentCate:''
}
const createExpense =(draft: DraftExpense) : Expense =>{
    return{
        ...draft,
        id:uuidv4()
    }
}

export const budgetReducer=(
    state: BudgetState = initialState,
    actions:BudgetActions
)=>{
    if(actions.type==="add-budget"){
        return{
            ...state,
            budget: actions.payload.budget//asidno la infromacion que paso desde mi dispacht 
        }
    }
    if (actions.type==="show-modal"){
        return {
            ...state,
            modal:true
        }
    }
    if (actions.type==="hide-modal"){
        return{
            ...state,
        modal:false,
        editExp:''
        }
    }
    if(actions.type==='add-expense'){
        const expense = createExpense(actions.payload.expense)
        return{
            ...state,
            expenses:[...state.expenses,expense],
            modal:false
        }
    }
    if (actions.type==='remove-expense'){
        
        return {
            ...state,
            expenses:[...state.expenses.filter(exp=>exp.id!==actions.payload.id)]

        }
    }
    if (actions.type==='get-expense-by-id'){
        
        return {
            ...state,
            editExp:actions.payload.id,
            modal:true
            
        }
    }
    if(actions.type === 'update-exp') {
        return {
            ...state,
            expenses: state.expenses.map(exp =>
                exp.id === actions.payload.expense.id ? actions.payload.expense : exp
            ),
            modal: false,
            editExp:''
        }
    }
    if(actions.type==='clean-app'){
        return{
            ...state,
            budget:0,
            expenses:[],
        }
    }
    if(actions.type==='filter-cate'){
        return{
            ...state,
            currentCate:actions.payload.id
        }
    }
    return state
}