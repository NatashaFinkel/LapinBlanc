import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import CreateClient from "../pages/CreateClient.tsx";
import ShowClientsList from "../pages/ShowClientsList.tsx";

const AppRouter = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<CreateClient />} />
        <Route path="/nouveau-client" element={<CreateClient />} />
        <Route path="/tout-les-clients" element={<ShowClientsList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
