import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import './App.css'
import Details from "./components/details/Details"
import Products from "./components/products/Products"
import MainContent from "./components/main-content/MainContent"

function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Details />
      <Products />
      <Footer />
    </div>
  )
}

export default App

