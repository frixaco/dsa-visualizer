import Navbar from "./Navbar";
import Visualizer from "./Visualizer";

function App() {
  return (
    <div className="w-full flex flex-col h-screen items-center mx-auto bg-indigo-500">
      <Navbar />
      <Visualizer />
    </div>
  );
}

export default App;
