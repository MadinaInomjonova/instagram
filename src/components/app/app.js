import { Route, Routes } from "react-router-dom";
import { CreateContent, Home, Sidebar } from "../";
import "./app.css";
import { Wrapper } from "./app-styled";
const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/create" element={<CreateContent />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
