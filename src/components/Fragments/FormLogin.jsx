import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form className="space-y-6" action="#">
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

      <Button variant="bg-indigo-600">Sign In</Button>
    </form>
  );
};

export default FormLogin;
