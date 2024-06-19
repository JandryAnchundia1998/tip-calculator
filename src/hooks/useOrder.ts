import { useState } from "react";
import type {  OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)

  // const addItem = (item: MenuItem) => {
  //   const itemExist = order.find((orderItem) => orderItem.id === item.id);

  //   if (itemExist) {
  //     console.log("si existe");

  //     const updateItem = order.map((orderItem) =>
  //       orderItem.id === item.id
  //         ? { ...orderItem, quantity: orderItem.quantity + 1 }
  //         : orderItem
  //     );

  //     setOrder(updateItem);
  //   } else {
  //     console.log("no existe");

  //     const newItem = { ...item, quantity: 1 }; // Esto es solo cuando se da un nuevo click, por eso debe tener una copia del Item, para que de la copia de item se cree un nuevo objeto.

  //     setOrder([...order, newItem]); //Luego en order agregamos ese objeto con el quantity añadido y ya va a temer algo order
  //   }
  // };

  // const removeItem = (itemId: MenuItem['id'])=>  {
  //     const deleteOrder = order.filter(itemOrder => itemOrder.id !== itemId)
  //     setOrder(deleteOrder);
      
  // }

  const placeOrder = ()=> {
    setOrder([])
    setTip(0)
    
  }

  console.log(order);

  return {
    order,
    tip, 
    setTip,
    placeOrder
   
  };
}
