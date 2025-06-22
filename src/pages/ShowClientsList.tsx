import React from "react";

type Client = {
  Client: string;
  Adresse: string;
  Téléphone: string;
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
            <h2>{client.Client}</h2>
            <p>{client.Adresse}</p>
            <p>{client.Téléphone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowClientsList;
