import React from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { OrderAction } from "../reducers/order-reducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: React.Dispatch<OrderAction>
};

export default function ({ order, dispatch }: OrderContentsProps) {

  console.log('auiiii', order);
  
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
   
          {order.map((item) => (
            <div key={item.id} className="flex justify-between items-center  py-5 border-gray-200 border-t last-of-type:border-b ">
              <div className="flex flex-col">
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}{" "}
                </p>
                <p className="font-black">
                  {" "}
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button onClick={()=> dispatch({type: "remove-item", payload: {itemId: item.id}})}  className="bg-red-600 h-9 px-3 rounded-lg font-bold">Eliminar</button>
            </div>
          ))}
     
      </div>
    </div>
  );
}
