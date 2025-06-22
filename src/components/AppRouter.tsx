import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import OrdersList from "../pages/ListOfOrders.tsx";
import NewOrder from "../pages/NewOrder.tsx";
import CreateClient from "../pages/NewClient.tsx";
import ShowClientsList from "../pages/ListOfClients.tsx";

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
        <Route path="/" element={<OrdersList />} />
        <Route path="/toutes-les-commandes" element={<OrdersList />} />
        <Route path="/nouvelle-commande" element={<NewOrder />} />
        <Route path="/nouveau-client" element={<CreateClient />} />
        <Route path="/tout-les-clients" element={<ShowClientsList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
