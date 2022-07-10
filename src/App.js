import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Thumbnail from "./components/Thumbnail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Thumbnail title="PLANS" />
      <Footer text="Ghana" />
    </div>
  );
}

export default App;
