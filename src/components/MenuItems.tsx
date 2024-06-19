
import { OrderAction } from '../reducers/order-reducer'
import type { MenuItem } from '../types'
type MenuItemsProps = {
  item: MenuItem, 
  dispatch: React.Dispatch<OrderAction>
}

export default function MenuItems({item, dispatch}: MenuItemsProps) {
  return (
    <button className='border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200'
    onClick={()=> dispatch({type: "add-item", payload: {item: item }})}>
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    
    </button>
  )
}
