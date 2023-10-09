import style from "../../asset/css/app.css";
import { useNavigate, Link } from "react-router-dom";
import "../../asset/css/model.css";
import ReactModal from "react-modal";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const VerificationAdmminPage = () => {
  // hiển thị model
  const [isOpen, setIsOpen] = useState(false);
  //logout
  const [cookies, setCookies, removeCookie] = useCookies(["token", "email", "fullName", "Roles"]);
  
  const logout = () => {
    removeCookie("token");
    removeCookie("email");
    removeCookie("fullName");
    removeCookie("Roles");
  };
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Responsive Admin & Dashboard Template based on Bootstrap 5"
      />
      <meta name="author" content="AdminKit" />
      <meta
        name="keywords"
        content="adminkit, bootstrap, bootstrap 5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" href="img/icons/icon-48x48.png" />
      <link rel="canonical" href="https://demo-basic.adminkit.io/" />
      <title>AdminKit Demo - Bootstrap 5 Admin Template</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <link href={style} rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <Link className="sidebar-brand" to="/admin">
              <span className="align-middle">Trung Hiếu Mobile</span>
            </Link>
            <ul className="sidebar-item">
              <li className="sidebar-header">Pages</li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin">
                  <i className="align-middle" data-feather="user" />{" "}
                  <span className="align-middle">Doanh Thu</span>
                </Link>
              </li>
              <li className="sidebar-nav">
                <Link className="sidebar-link" to="/admin/categories">
                  <i className="align-middle" data-feather="grid" />{" "}
                  <span className="align-middle">Danh Mục</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/products">
                  <i className="align-middle" data-feather="square" />{" "}
                  <span className="align-middle">Sản Phẩm</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/user">
                  <i className="align-middle" data-feather="user" />{" "}
                  <span className="align-middle">Khách Hàng</span>
                </Link>
              </li>
              <li className="sidebar-item active">
                <Link className="sidebar-link" to="/admin/verification">
                  <i className="align-middle" data-feather="grid" />{" "}
                  <span className="align-middle">Khuyến Mãi</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/" onClick={logout}>
                  <i className="align-middle" data-feather="user" />{" "}
                  <span className="align-middle">Đăng Xuất</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main" style={{ width: "1218px" }}>
          <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle mx-2">
              <i className="hamburger align-self-center" />
            </a>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-align">
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <div className="position-relative">
                      <i className="align-middle" data-feather="bell" />
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                    aria-labelledby="alertsDropdown"
                  >
                    <div className="dropdown-menu-header">
                      4 New Notifications
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i
                              className="text-danger"
                              data-feather="alert-circle"
                            />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Update completed</div>
                            <div className="text-muted small mt-1">
                              Restart server 12 to complete the update.
                            </div>
                            <div className="text-muted small mt-1">30m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-warning" data-feather="bell" />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Lorem ipsum</div>
                            <div className="text-muted small mt-1">
                              Aliquam ex eros, imperdiet vulputate hendrerit et.
                            </div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-primary" data-feather="home" />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">
                              Login from 192.186.1.8
                            </div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i
                              className="text-success"
                              data-feather="user-plus"
                            />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">New connection</div>
                            <div className="text-muted small mt-1">
                              Christina accepted your request.
                            </div>
                            <div className="text-muted small mt-1">14h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">
                        Show all notifications
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <div className="position-relative">
                      <i
                        className="align-middle"
                        data-feather="message-square"
                      />
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                    aria-labelledby="messagesDropdown"
                  >
                    <div className="dropdown-menu-header">
                      <div className="position-relative">4 New Messages</div>
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img
                              src="img/avatars/avatar-5.jpg"
                              className="avatar img-fluid rounded-circle"
                              alt="Vanessa Tucker"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Vanessa Tucker</div>
                            <div className="text-muted small mt-1">
                              Nam pretium turpis et arcu. Duis arcu tortor.
                            </div>
                            <div className="text-muted small mt-1">15m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img
                              src="img/avatars/avatar-2.jpg"
                              className="avatar img-fluid rounded-circle"
                              alt="William Harris"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">William Harris</div>
                            <div className="text-muted small mt-1">
                              Curabitur ligula sapien euismod vitae.
                            </div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img
                              src="img/avatars/avatar-4.jpg"
                              className="avatar img-fluid rounded-circle"
                              alt="Christina Mason"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Christina Mason</div>
                            <div className="text-muted small mt-1">
                              Pellentesque auctor neque nec urna.
                            </div>
                            <div className="text-muted small mt-1">4h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img
                              src="img/avatars/avatar-3.jpg"
                              className="avatar img-fluid rounded-circle"
                              alt="Sharon Lessman"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Sharon Lessman</div>
                            <div className="text-muted small mt-1">
                              Aenean tellus metus, bibendum sed, posuere ac,
                              mattis non.
                            </div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">
                        Show all messages
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="align-middle" data-feather="settings" />
                  </a>
                  <span className="nav-link dropdown-toggle d-none d-sm-inline-block">
                    <img
                      src="https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_960_720.png"
                      className="avatar img-fluid rounded me-1"
                      alt="Charles Hall"
                    />
                    <span className="text-dark">Trung Hiếu</span>
                  </span>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <i className="align-middle me-1" data-feather="user" />{" "}
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        className="align-middle me-1"
                        data-feather="pie-chart"
                      />
                      Analytics
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="index.html">
                      <i
                        className="align-middle me-1"
                        data-feather="settings"
                      />{" "}
                      Settings &amp; Privacy
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        className="align-middle me-1"
                        data-feather="help-circle"
                      />{" "}
                      Help Center
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content">
            <div className="container-fluid p-0">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Bảng ưu đãi</h3>
                  <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#">
                        <button
                          onClick={() => setIsOpen(true)}
                          class="btn btn-success"
                        >
                          {" "}
                          + Thêm mới khuyến mãi
                        </button>
                        <ReactModal
                          isOpen={isOpen}
                          onRequestClose={() => setIsOpen(false)}
                          className="custom-modal"
                          overlayClassName="custom-overlay"
                        >
                          <h2 className="modal-title">Thêm Mới Khuyến Mãi</h2>
                          <form action="">
                            <input type="text" placeholder="Tên Khuyến Mãi" />
                            <br />
                            <b>ngày bắt đầu</b>
                            <input type="date" />
                            <br />
                            <b>ngày kết thúc</b>
                            <input type="date" />
                            <br />
                            <input
                              type="text"
                              placeholder="Phần trăm khuyến mãi"
                            />
                            <br />
                            <button className="btn btn-info">Thêm Mới</button>
                          </form>
                        </ReactModal>
                      </a>
                      <form className="d-flex" role="search">
                        <input
                          className="form-control me-2 fst-italic"
                          type="search"
                          placeholder="tìm kiếm mã ưu đãi >>>  "
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          tim kiếm
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped text-center"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Eventr Name</th>
                        <th>Start Date</th>
                        <th>Created Date</th>
                        <th>Status</th>
                        <th colSpan={2}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2/9 kỷ niệm</td>
                        <td>22/07/2023</td>
                        <td>28/09/2023</td>
                        <td>Hết hạn</td>
                        <td>
                          <button type="button" className="btn btn-warning">
                            Edit
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Block
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example ">
                  <ul className="pagination float-end mx-4">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /.card-body */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default VerificationAdmminPage;
