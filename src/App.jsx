import "./App.css";
import GalleryDescription from "./components/GalleryDescription";
import GalleryImage from "./components/GalleryImage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <GalleryImage />
        <GalleryDescription />
      </Navbar>
    </>
  );
}

export default App;
