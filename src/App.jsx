import { Routes, Route } from "react-router-dom";
import SalesLayout from "./Layout/SalesLayout/SalesLayout";
import SalesPage from "./pages/SalesPage/SalesPage";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
function App() {
  const isAuthenticated = false;
  return (
    <main className={classes.wrapper}>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<SalesLayout />}>
          <Route path="" element={<SalesPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
