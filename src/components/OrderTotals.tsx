import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { useEffect, useMemo, useState } from "react";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
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

      <button onClick={placeOrder}
        className="w-full uppercase bg-black p-3 text-white font-black mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
      >
        Guardar orden
      </button>
    </>
  );
}
