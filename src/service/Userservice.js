import axiosInstance from "../Axios";

const userLogin = (user) => {
  return axiosInstance().post("api/v4/auth/sign-in", { user });
};

const userRegister = (userRegister) => {
  return axiosInstance().post("api/v4/auth/sign-up", { userRegister });
};

export { userLogin, userRegister };
