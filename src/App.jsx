import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Industries from "./components/Industries";



const App = () => {
  return (
    <div className="homepage">
      <Header/>
     <Hero/>
      <Features/>
    <Industries/>
      <Footer />
    </div>
  );
};

export default App;