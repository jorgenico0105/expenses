
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import { useBudget } from "../hooks/useBudget"
import 'react-circular-progressbar/dist/styles.css'
import Amount from "./Amount"
export default function BudgetTracker() {
  const {state,gastado,disponible,dispatch}=useBudget()

  const percentaje=+((gastado/state.budget)*100).toFixed(2)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center ">
        <CircularProgressbar
        value={percentaje}//Porcentaje lleno
        styles={buildStyles({
          pathColor:percentaje > 85 ? '#E91E63' :'#3B82F6',//Usado
          trailColor:'#F5F5F5',//Sin usar 
          textSize: 8, 
          textColor: '#3B82F6'
        })}
        text={`${percentaje}% Gastado`}
        >
        </CircularProgressbar>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
        type="button"
        onClick={() => {dispatch({type:'clean-app'})}}
        className="bg-pink-500 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
            Resetear Gastos
        </button>
        <Amount
        label="Presupuesto"
        amount={state.budget}
        >

        </Amount>
        <Amount
        label="Disponible"
        amount={disponible}
        >

        </Amount>
        <Amount
        label="Invertido"
        amount={gastado}>

        </Amount>
      </div>
    </div>
  )
}
