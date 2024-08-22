
import Amount from "./Amount"
export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center ">
        <img src="/grafico.jpg" alt="Grafica de Gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
        type="button"
        className="bg-pink-500 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
            Resetear Gastos
        </button>
        <Amount
        label="Presupuesto"
        amount={330}
        >

        </Amount>
        <Amount
        label="Dsiponible"
        amount={330}
        >

        </Amount>
        <Amount
        label="Gastado"
        amount={330}>

        </Amount>
      </div>
    </div>
  )
}
