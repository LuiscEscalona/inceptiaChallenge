import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/userSlice";
import thunkStates from "../../redux/thunkStates";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../../resource/loading.svg";

export default function Login() {
  const [email, setEmail] = useState("reactdev@iniceptia.ai");
  const [password, setPassword] = useState("4eSBbHqiCTPdBCTj");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser({ email, password }));
  };

  useEffect(() => {
    isLoading === thunkStates.FULFILLED && history.push("/reports");
  }, [isLoading]);

  return (
    <div className="login-container">
      <div className="login">
        <h3>
          incept<span>ia</span>
        </h3>
        {isLoading === thunkStates.PENDING ? (
          <img src={Loading} alt="loading" height="100px" />
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username"
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
            <input type="submit" className="login-button" />
          </form>
        )}
      </div>
    </div>
  );
}
