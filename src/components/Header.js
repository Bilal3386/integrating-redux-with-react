import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";
const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthentication);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authAction.logout());
  };
  console.log(auth);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{auth && <a href="/">My Products</a>}</li>
          <li>{auth && <a href="/">My Sales</a>}</li>
          <li>{auth && <button onClick={logoutHandler}>Logout</button>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
