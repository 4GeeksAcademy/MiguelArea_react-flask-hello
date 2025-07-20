import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista de tareas</h2>
      <ul className="list-group">
        {store.todos?.map((item) => (
          <li key={item.id} className="list-group-item">
            <Link to={"/single/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
    </div>
  );
};
