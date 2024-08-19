import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
<Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/react-redux-project" element={<Home/>}/>

        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
