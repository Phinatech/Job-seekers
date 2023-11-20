import { Outlet } from "react-router-dom";
import Header from "../Static/Header";

const SignUpLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SignUpLayout;
