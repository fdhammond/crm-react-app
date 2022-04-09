import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Init from "./pages/Init";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import ViewClient from "./pages/ViewClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Init />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ViewClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
