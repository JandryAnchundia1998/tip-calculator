import { MenuItem, OrderItem } from "../types";

export type OrderAction= 
    {type: 'add-item', payload: {item: MenuItem}} |
    {type: 'remove-item', payload: {itemId: MenuItem['id']}} |
    {type: 'place-order'} |
    {type: 'add-tip', payload: {value: number}} 

export type OrderState = {
    order: OrderItem[], 
    tip: number
}

export const initialState : OrderState  = {
    order: [], 
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState, 
    action: OrderAction
    )=> {


        if (action.type =="add-item") {

            const itemExist = state.order.find((orderItem) => orderItem.id === action.payload.item.id);

            let updateItem : OrderItem[] = []
            if (itemExist) {
              console.log("si existe");
        
              updateItem = state.order.map((orderItem) =>
                orderItem.id === action.payload.item.id
                  ? { ...orderItem, quantity: orderItem.quantity + 1 }
                  : orderItem
              );
        
      
            } else {
              console.log("no existe");
        
              const newItem : OrderItem = { ...action.payload.item, quantity: 1 }; // Esto es solo cuando se da un nuevo click, por eso debe tener una copia del Item, para que de la copia de item se cree un nuevo objeto.
        
              updateItem = [...state.order, newItem]
            }
            return {
                ...state, 
                order: updateItem
            }
        }


        
        if (action.type =="remove-item") {

            const deleteOrder = state.order.filter(itemOrder => itemOrder.id !== action.payload.itemId)

            return {
                ...state, 
                order: deleteOrder
            }
        }
        if (action.type =="place-order") {


            return {
                ...state, 
                order: [], 
                tip: 0
            }
        }
        if (action.type =="add-tip") {
            const tip = action.payload.value;
            return {
                ...state, 
                tip: tip
            }
        }



        return state

}