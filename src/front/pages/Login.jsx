import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      sessionStorage.setItem("user", JSON.stringify(data.user));
      navigate("/private");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Correo" onChange={handleChange} className="form-control mb-2" required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} className="form-control mb-2" required />
        <button type="submit" className="btn btn-success">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
