import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/login";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";
import ProfilePage from "./pages/profile";
import GetDataPage from "./pages/getData";

const routes = [
  { path: "/login", element: <LoginPage /> },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/api/auth/google/callback",
    element: (
      <ProtectedRoute>
        <GetDataPage />
      </ProtectedRoute>
    ),
  },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
