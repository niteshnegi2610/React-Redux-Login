import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const eventLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user-name">{user.name}</span> !
      </h1>
      <button className="logout-btn" onClick={(e) => eventLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
