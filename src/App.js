import { useGlobalContext } from "./Context/context";
import Heor from "./components/Heor";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Submenu from "./components/Submenu";
function App() {
  const { open } = useGlobalContext();
  console.log(open);
  return (
    <div className="App">
      <Navbar />
      <Submenu />
      <Heor />
      {open && <SideBar />}

      {/* <SideBar /> */}
    </div>
  );
}

export default App;
