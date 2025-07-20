import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(import.meta.env.VITE_BACKEND_URL + "/api/private")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="container mt-5">
      <h2>Zona Privada</h2>
      <h4>Hola, {user?.email}</h4>
      {data ? (
        <>
          <p>{data.msg}</p>
          <p>{data.data}</p>
        </>
      ) : (
        <p>Cargando contenido...</p>
      )}
    </div>
  );
};

export default Private;
