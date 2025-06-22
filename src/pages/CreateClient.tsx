import React, { useState } from "react";
import AppInput from "../components/AppInput";

type Client = {
  Client: string;
  Adresse: string;
  Téléphone: string;
};

const getClientsList = (): Client[] => {
  const data = localStorage.getItem("clientsList");
  return data ? JSON.parse(data) : [];
};

const setClientsList = (list: Client[]) => {
  localStorage.setItem("clientsList", JSON.stringify(list));
};

const CreateClient: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newClient: Client = {
      Client: `${firstName} ${lastName}`,
      Adresse: adress,
      Téléphone: phone,
    };

    const updatedList = [...getClientsList(), newClient];
    setClientsList(updatedList);
    setFirstName("");
    setLastName("");
    setAdress("");
    setPhone("");
  };

  return (
    <section>
      <h1>Ajouter un nouveau client</h1>
      <form id="create-new-client" onSubmit={handleSubmit}>
        <AppInput
          inputHtmlFor="client-first-name"
          inputLabelTxt="Prénom"
          inputType="text"
          inputId="client-first-name"
          inputName="client-first-name"
          inputValue={firstName}
          inputOnChange={(e) => setFirstName(e.target.value)}
        />

        <AppInput
          inputHtmlFor="client-last-name"
          inputLabelTxt="Nom"
          inputType="text"
          inputId="client-last-name"
          inputName="client-last-name"
          inputValue={lastName}
          inputOnChange={(e) => setLastName(e.target.value)}
        />

        <AppInput
          inputHtmlFor="adress"
          inputLabelTxt="Addresse"
          inputType="text"
          inputId="adress"
          inputName="adress"
          inputValue={adress}
          inputOnChange={(e) => setAdress(e.target.value)}
        />

        <AppInput
          inputHtmlFor="phone"
          inputLabelTxt="Téléphone"
          inputType="text"
          inputId="phone"
          inputName="phone"
          inputValue={phone}
          inputOnChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" className="btn">Ajouter ce client</button>
      </form>
    </section>
  );
};

export default CreateClient;
