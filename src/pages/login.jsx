import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" desk="Sign in to your account">
      <FormLogin />

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <Link
          to="/register"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Register now
        </Link>
      </p>
    </AuthLayout>
  );
};
export default LoginPage;
