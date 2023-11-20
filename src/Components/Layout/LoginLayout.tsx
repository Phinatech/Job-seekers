import { Outlet } from "react-router-dom";
import Header from "../Static/Header";

const LoginLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
