import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { name, type, label, placeholder } = props;
  return (
    <div className=" mb-8">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
