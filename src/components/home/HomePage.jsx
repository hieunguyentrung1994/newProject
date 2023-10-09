import React, {useState} from 'react';
import { useCookies } from "react-cookie";
import ReactModal from 'react-modal';
import  "../../asset/css/model.css";


function HomePage() {
  const [cookies, setCookies, removeCookie] = useCookies(["token", "email", "fullName", "Roles"]);
  
  const logout = () => {
    removeCookie("token");
    removeCookie("email");
    removeCookie("fullName");
    removeCookie("Roles");
  };
  // hiển thị model
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
 
      <button
        style={{ display: cookies.token ? "block" : "none", border: "1px solid", padding: "15px" }}
        className="logout"
        onClick={logout}
      >
        đăng xuất
      </button>
      <h1> đây là trang home</h1>
      <button onClick={() => setIsOpen(true)} class="btn btn-primary btn-lg">Open Modal</button>
      <ReactModal 
    isOpen={isOpen} 
    onRequestClose={() => setIsOpen(false)}
    className="custom-modal"
    overlayClassName="custom-overlay"
>
    <h2 className="modal-title">Modal Title</h2>
    <p>Modal Content</p>
    <button className="close-button" onClick={() => setIsOpen(false)}>x</button>
</ReactModal>
      
    </>
  );
}

export default HomePage;
