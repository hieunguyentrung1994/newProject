import style from "../../asset/css/app.css";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const HomeAdmminPage = () => {
  // logout
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
  <title>Admin Trung Hiếu Mobile</title>
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
          <li className="sidebar-item active">
            <Link className="sidebar-link" to="/admin">
              <i className="align-middle" data-feather="grid" />{" "}
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
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/admin/verification">
              <i className="align-middle" data-feather="user" />{" "}
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
    <div className="main" style={{width: "1218px"}}>
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a className="sidebar-toggle js-sidebar-toggle mx-2">
          <i className="hamburger align-self-center" />
        </a>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="align-middle" data-feather="settings" />
              </a>
              <span className="nav-link dropdown-toggle d-none d-sm-inline-block">
<img src="https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_960_720.png"
      className="avatar img-fluid rounded me-1"
      alt="Charles Hall"
    />
    <span className="text-dark">Trung Hiếu</span>
  </span>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  <i className="align-middle me-1" data-feather="user" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="align-middle me-1" data-feather="pie-chart" />
                  Change Pass
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
          <h1 className="h3 mb-3">
            <strong>phân tích :</strong> 
doanh thu theo ngày
          </h1>
          <div className="row">
            <div className="col-xl-6 col-xxl-5 d-flex">
              <div className="w-100">
                <div className="row">
                  <div className="col-sm-6">
                    
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mt-0">
                            <h5 className="card-title">Khách hàng</h5>
                          </div>
                          <div className="col-auto">
                            <div className="stat text-primary">
                              <i
                                className="align-middle"
                                data-feather="users"
                              />
                            </div>
                          </div>
                        </div>
                        <h1 className="mt-1 mb-3">14.212</h1>
                        <div className="mb-0">
                          <span className="text-success">
                            {" "}
                            <i className="mdi mdi-arrow-bottom-right" /> 5.25%{" "}
                          </span>
                          <span className="text-muted">Kể từ ngày hôm qua</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mt-0">
                            <h5 className="card-title">Thu nhập</h5>
                          </div>
                          <div className="col-auto">
                            <div className="stat text-primary">
                              <i
                                className="align-middle"
                                data-feather="dollar-sign"
                              />
                            </div>
                          </div>
                        </div>
                        <h1 className="mt-1 mb-3">$21.300</h1>
                        <div className="mb-0">
                          <span className="text-success">
                            {" "}
                            <i className="mdi mdi-arrow-bottom-right" /> 6.65%{" "}
                          </span>
                          <span className="text-muted">Kể từ ngày hôm qua</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mt-0">
                            <h5 className="card-title">Đơn Đặt hàng</h5>
                          </div>
                          <div className="col-auto">
                            <div className="stat text-primary">
                              <i
                                className="align-middle"
                                data-feather="shopping-cart"
                              />
                            </div>
                          </div>
                        </div>
                        <h1 className="mt-1 mb-3">64</h1>
                        <div className="mb-0">
                          <span className="text-danger">
                            {" "}
                            <i className="mdi mdi-arrow-bottom-right" /> -2.25%{" "}
                          </span>
                          <span className="text-muted">Kể từ ngày hôm qua</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-7">
            <div className="col-12 col-lg-8 col-xxl-9 d-flex" style={{width:"100%"}}>
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title mb-0">doanh thu tháng này</h5>
                </div>
                <table className="table table-hover my-0 text-center">
                  <thead>
                    <tr>
                  <th className="d-none d-xl-table-cell">Số lượng đơn hàng</th>
                  <th className="d-none d-xl-table-cell">Số lượng thành công</th>
                  <th className="d-none d-xl-table-cell">Đơn hàng đang chờ</th>
                  <th className="d-none d-xl-table-cell">Số lượng hủy</th>
                  <th className="d-none d-xl-table-cell">Doanh thu tháng</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="d-none d-xl-table-cell">10</td>
                  <td className="d-none d-xl-table-cell">7</td>
                  <td className="d-none d-xl-table-cell">2</td>
                  <td className="d-none d-xl-table-cell">1</td>
                  <th className="d-none d-xl-table-cell">50,000,000 đ</th>
                  </tr>
                    
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
         </div>
          <div className="row">
            <div className="col-12 col-lg-8 col-xxl-9 d-flex" style={{width:"100%"}}>
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title mb-0">Chi tiết đơn hàng</h5>
                </div>
                <table className="table table-hover my-0 text-center">
                  <thead>
                    <tr>
                      <th>Mã số đơn hàng</th>
                      <th className="d-none d-xl-table-cell">Ngày giao hàng</th>
                      <th className="d-none d-xl-table-cell">Ngày kết thúc</th>
                      <th className="d-none d-xl-table-cell">Tên khách hàng, SĐT, Địa chỉ giao hàng </th>
                      <th className="d-none d-md-table-cell">SL sản phẩm </th>
                      <th className="d-none d-md-table-cell">Tên mặt hàng </th>
                      <th>Trạng thái đơn hàng</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="d-none d-xl-table-cell">01/01/2021</td>
                      <td className="d-none d-xl-table-cell">31/06/2021</td>
                      <td className="d-none d-xl-table-cell">Giang, 02154877, Hà Nội</td>
                      <td className="d-none d-md-table-cell">1</td>
                      <td className="d-none d-md-table-cell">Iphone 15</td>
                      <td>
                        <span >Done</span>
                      </td>
                      <td>
                      <button className="badge bg-success">Sửa</button></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </main>
     
    </div>
  </div>
</>

    );
};
export default HomeAdmminPage;
