import { formatCurrency } from "../helpers"

type AmountProps ={
    label?:string
    amount:number
}
export default function Amount({label,amount}:AmountProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
}

