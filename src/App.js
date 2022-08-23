// import Header from "./components/Header";
// import Button from "./components/Button";
// import { Image } from "./components/Image";
 //import Navbar from "./components/NavItem";
// import Practice from "./components/Practice";
// import Form from "./components/Form";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager";
import Spinner from "./components/Spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/task-manager" task-manager element={<TaskManager />} />
          <Route path="/about" about element={<About />} />
          <Route path="/contact" contact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}
    </div>
  );
}

export default App;
