type AppInputProps = {
  inputHtmlFor: string;
  inputLabelTxt: string;
  inputType: string;
  inputId: string;
  inputName: string;
  inputValue: string;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AppInput({
  inputHtmlFor,
  inputLabelTxt,
  inputType,
  inputId,
  inputName,
  inputValue,
  inputOnChange,
}: AppInputProps) {
  return (
    <div className="div-2">
      <label htmlFor={inputHtmlFor}>{inputLabelTxt}</label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        value={inputValue}
        onChange={inputOnChange}
        required
      />
    </div>
  );
}
