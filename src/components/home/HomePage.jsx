import style from "../login/style.css";
function HomePage() {
  let token = localStorage.getItem("token");
  const dangxuat = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <button
        style={{ display: token ? "block" : "none" }}
        class="login"
        onClick={dangxuat}
      >
        {" "}
        đăng xuất{" "}
      </button>
      <h1> đây là trang home</h1>
    </>
  );
}
export default HomePage;
