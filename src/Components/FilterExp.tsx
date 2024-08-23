import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterExp() {
    const {dispatch}=useBudget()
    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch({type: 'filter-cate',payload:{id:e.target.value}})
    }
  return (
    <div className="bg-white p-10 shadow-lg rounded-lg">
      <form action="">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
            <label htmlFor="category" className="font-bold">Filtrar Gastos</label>
                <select  id="category" className="bg-slate-100 text-center p-3 flex-1 rounded" onChange={handleChange}>
                    <option value="">--Todas las Categorias--</option>
                    {categories.map(cate=>(
                        <option value={cate.id} key={cate.id}>{cate.name}</option>
                    ))}
                </select>
        </div>
      </form>
    </div>
  )
}
