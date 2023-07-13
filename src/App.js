import "./App.css";
import Navbar from "./components/navbar";
import Homescreen from "./components/homescreen";
import Info from "./components/info";
import Service from "./components/service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
      <Info />
      <Service />
    </div>
  );
}

export default App;
