type InputProps = {
  inputHtmlFor: string;
  inputLabelTxt: string;
  inputType: string;
  inputId: string;
  inputName: string;
};

export default function Input({
  inputHtmlFor,
  inputLabelTxt,
  inputType,
  inputId,
  inputName,
}: InputProps) {
  return (
    <div className="div-2">
      <label htmlFor={inputHtmlFor}>{inputLabelTxt}</label>
      <input type={inputType} id={inputId} name={inputName} required />
    </div>
  );
}
