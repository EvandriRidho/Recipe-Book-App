import { Link } from "react-router-dom";
import Button from "../components/Elements/Button/Button";
import InputForm from "../components/Elements/InputForm/InputForm";
import Checkbox from "../components/Elements/InputForm/checkbox";

const RegisterPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form>
          <InputForm
            type="fullname"
            id="fullname"
            placeholder="Enter Your Fullname"
            htmlFor="fullname"
          >
            Fullname
          </InputForm>

          <InputForm
            type="email"
            id="email"
            placeholder="Example@gmail.com"
            htmlFor="email"
          >
            Email
          </InputForm>

          <InputForm
            type="password"
            id="password"
            placeholder="********"
            htmlFor="password"
          >
            Password
          </InputForm>

          <InputForm
            type="confirmpassword"
            id="confirmpassword"
            placeholder="********"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </InputForm>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Checkbox type="checkbox" id="remember" />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>
          <Button type="submit">Register</Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          have an account?
          <Link to={"/login"} className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
