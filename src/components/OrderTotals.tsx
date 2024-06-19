import { formatCurrency } from "../helpers";
import { OrderAction } from "../reducers/order-reducer";
import { OrderItem } from "../types";
import { useEffect, useMemo, useState } from "react";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: React.Dispatch<OrderAction>
};

export default function OrderTotals({
  order,
  tip,
  dispatch
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl ">Totales y propina</h2>
        <p>
          Subtotal a Pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a Pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button onClick={()=> dispatch({type: "place-order"})}
        className="w-full uppercase bg-black p-3 text-white font-black mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
      >
        Guardar orden
      </button>
    </>
  );
}
