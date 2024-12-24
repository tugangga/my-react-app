import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form className="space-y-6" action="#">
      <InputForm
        label="Full Name"
        type="text"
        name="fullname"
        placeholder="your name"
      />

      <InputForm
        label="E-mail"
        type="email"
        name="email"
        placeholder="your email"
      />

      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />

      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="******"
      />

      <Button variant="bg-indigo-600">Register</Button>
    </form>
  );
};

export default FormRegister;
