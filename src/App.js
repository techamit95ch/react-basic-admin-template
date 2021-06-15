import TopBar from "./componenets/topbar/TopBar";
import SideBar from "./componenets/sidebar/SideBar";
import Home from "./pages/home/Home";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <TopBar />
    <div className="container1">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
