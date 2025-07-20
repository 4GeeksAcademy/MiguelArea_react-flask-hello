import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Single = () => {
  const { store } = useGlobalReducer();
  const { theId } = useParams();

  const todo = store.todos.find((item) => item.id === parseInt(theId));

  if (!todo) {
    return (
      <div className="container mt-5">
        <h2>No se encontró el todo</h2>
        <Link to="/demo" className="btn btn-secondary mt-3">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4">Detalle del Todo</h1>
      <p className="lead">ID: {todo.id}</p>
      <p className="lead">Título: {todo.title}</p>
      <Link to="/demo" className="btn btn-primary mt-3">
        Volver
      </Link>
    </div>
  );
};

export default Single;
