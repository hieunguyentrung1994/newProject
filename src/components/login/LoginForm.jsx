import style from "./style.css";
import React, { useState, useEffect } from "react";
import { userLogin } from "../../service/Userservice";
import { toast } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isToggle, setToggle] = useState(false);
  const [userform, setUserform] = useState({
    email: "",
    password: "",
  });
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 50);
  }, []);

  const handleOnchangeLogin = (e) => {
    const { name, value } = e.target;
    setUserform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post("http://localhost:8888/api/v4/auth/sign-in", userform)
      .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("/");
        })
    }catch (error) {
          alert("Invalid user name or password");
        }
      };
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>
        CodePen - Finance Mobile Application-UX/UI Design Screen One
      </title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      />
      <link rel="stylesheet" href={style} />
      <div className="screen-1">
        <svg
          className="logo"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width={300}
          height={300}
          viewBox="0 0 640 480"
          xmlSpace="preserve"
        >
          <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
            <circle
              style={{
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(61,71,133)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              cx={0}
              cy={0}
              r={40}
            />
          </g>
          <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
            <circle
              style={{
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              cx={0}
              cy={0}
              r={40}
            />
          </g>
          <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
            <circle
              style={{
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              cx={0}
              cy={0}
              r={40}
            />
          </g>
          <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
            <circle
              style={{
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              cx={0}
              cy={0}
              r={40}
            />
          </g>
          <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
            <polygon
              style={{
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              points="-50,-50 -50,50 50,50 50,-50 "
            />
          </g>
          <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
            <polygon
              style={{
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              vectorEffect="non-scaling-stroke"
              points="-50,-50 -50,50 50,50 50,-50 "
            />
          </g>
        </svg>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <div className="sec-2">
              <ion-icon name="mail-outline" />
              <input
                type="email"
                name="email"
                placeholder="Username@gmail.com"
                onChange={handleOnchangeLogin}
                value={userform.email}
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <input
                className="pas"
                type="password"
                name="password"
                placeholder="············"
                onChange={handleOnchangeLogin}
                value={userform.password}
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          <button type="submit" className="login">
            Login{" "}
          </button>
        </form>
        <div className="footer">
          <Link to="/register">Signup</Link>
          <span>Forgot Password?</span>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
