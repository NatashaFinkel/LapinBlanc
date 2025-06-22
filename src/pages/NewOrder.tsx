import React, { useEffect, useState } from "react";
import products from "../json/products.json";

type Client = {
  clientName: string;
};

type Order = {
  name: string;
  productName: string;
  quantity: number;
};

const getClientsList = (): Client[] => {
  const data = localStorage.getItem("clientsList");
  const clients = data ? JSON.parse(data) : [];
  return clients.map((client: { clientName: string }) => {
    console.log(client.clientName);
    return { clientName: client.clientName };
  });
};

const getOrdersList = (): Order[] => {
  const data = localStorage.getItem("ordersList");
  return data ? JSON.parse(data) : [];
};

const setOrdersList = (list: Order[]) => {
  localStorage.setItem("ordersList", JSON.stringify(list));
};

const NewOrder: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setClients(getClientsList());
  }, []);

  const handleSubmitNewOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: Order = {
      name: selectedClient,
      productName: selectedProduct,
      quantity: quantity,
    };

    const updatedList = [...getOrdersList(), newOrder];
    setOrdersList(updatedList);
  };

  return (
    <section>
      <h1>Nouvelle commande : </h1>
      <div>
        <form onSubmit={handleSubmitNewOrder}>
          <label htmlFor="client">Client :</label>
          <select
            id="client"
            name="client"
            required
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="">Sélectionner un client</option>
            {clients.map((client, idx) => (
              <option key={idx} value={client.clientName}>
                {client.clientName}
              </option>
            ))}
          </select>
          <span className="product-span">
            <label htmlFor="product-quantity" style={{ marginTop: "1rem" }}>
              Quantité :
            </label>
            <input
              id="product-quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              style={{ marginLeft: "0.5rem", width: "70px" }}
            />

            <label htmlFor="product">Produit :</label>
            <select
              id="product"
              name="product"
              required
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Sélectionner un produit</option>
              {products.map((product, idx) => (
                <option key={`product-${idx}`} value={product.productName}>
                  {product.productName}
                </option>
              ))}
            </select>
          </span>
          <button type="submit" className="btn">
            Ajouter
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewOrder;
