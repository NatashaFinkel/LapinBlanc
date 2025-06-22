import React from "react";
import type { Order } from "../typeScript/Order";

const getOrdersList = (): Order[] => {
  const data = localStorage.getItem("ordersList");
  console.log(data);
  return data ? JSON.parse(data) : [];
};

const OrdersList: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    setOrders(getOrdersList());
  }, []);

  return (
    <section>
      <h1>Liste des commandes</h1>
      <div className="card-container">
        {orders.map((order, idx) => (
          <div key={idx} className="card">
            <h2>{order.name}</h2>
            <span className="order-item">
              <p>{order.quantity}</p>
              <p>{order.productName}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersList;
