import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLogged = !!sessionStorage.getItem("user");

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand fw-bold" to="/">AuthApp</Link>
      <div className="ms-auto">
        {!isLogged ? (
          <>
            <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
            <Link className="btn btn-outline-success" to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-secondary me-2" to="/private">Private</Link>
            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};
