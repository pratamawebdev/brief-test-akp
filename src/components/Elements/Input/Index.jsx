import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { children, type, placeholder, htmlFor } = props;
  return (
    <>
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input type={type} placeholder={placeholder} />
    </>
  );
};

export default InputForm;
