import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import './App.css'
import Main from "./components/main/Main"
import Details from "./components/details/Details"
import Products from "./components/products/Products"

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Details />
      <Products />
      <Footer />
    </div>
  )
}

export default App

