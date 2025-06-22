import React from "react";

type Client = {
  clientName: string;
  phone: string;
};

const getClientsList = (): Client[] => {
  const data = localStorage.getItem("clientsList");
  return data ? JSON.parse(data) : [];
};

const clients = getClientsList();

const ShowClientsList: React.FC = () => {
  return (
    <section>
      <h1>Liste des clients</h1>
      <div className="card-container">
        {clients.map((client, idx) => (
          <div className="card" key={idx}>
            <h2>{client.clientName}</h2>
            <p>{client.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowClientsList;
