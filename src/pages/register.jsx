import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" desk="Register your account">
      <FormRegister />
      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Already a member?
        <Link
          to="/"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Login now
        </Link>
      </p>
    </AuthLayout>
  );
};
export default RegisterPage;
