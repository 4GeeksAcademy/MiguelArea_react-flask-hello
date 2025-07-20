import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Bienvenido</h1>
      <p className="lead">Este es un sistema de autenticación con React + Flask</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link className="btn btn-primary" to="/signup">Registrarse</Link>
        <Link className="btn btn-success" to="/login">Iniciar sesión</Link>
      </div>
    </div>
  );
};