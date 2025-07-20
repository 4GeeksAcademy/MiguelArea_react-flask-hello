import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from "./hooks/useGlobalReducer";
import { BackendURL } from "./components/BackendURL";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  if (!backendUrl) {
    return <BackendURL />;
  }

  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
