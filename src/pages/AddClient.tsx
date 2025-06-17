import Input from "../components/Input";

export default function AddClient() {
  return (
    <section>
      <h2>Ajouter un nouveau client</h2>
      <form id="create-new-client" autoComplete="off" className="fragment-1">
        <div className="div">
          <Input
            inputHtmlFor="client-first-name"
            inputLabelTxt="Prénom :"
            inputType="text"
            inputId="client-first-name"
            inputName="client-first-name"
          />

          <Input
            inputHtmlFor="client-last-name"
            inputLabelTxt="Nom :"
            inputType="text"
            inputId="client-last-name"
            inputName="client-last-name"
          />

          <Input
            inputHtmlFor="client-adress"
            inputLabelTxt="Adresse :"
            inputType="text"
            inputId="client-adress"
            inputName="client-adress"
          />

          <Input
            inputHtmlFor="client-phone"
            inputLabelTxt="Téléphone :"
            inputType="tel"
            inputId="client-phone"
            inputName="client-phone"
          />

          <div>
            <input
              type="submit"
              id="submit-new-client"
              className="submit-form-btn"
              value="Ajouter ce client"
            ></input>
          </div>
        </div>
      </form>
    </section>
  );
}
