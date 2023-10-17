import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import CardList from './components/CardList/CardList'

function App() {

  const [count, setCount] = useState(0);
  const [somme , setSomme] = useState(0);

  return (
    <>
    <header>

      <Navbar
    Logo = "Logo"
    nomDuSite=  "Boutique du site"
    count = {count}
    somme = {somme}
     />

    </header>

    <main className='main'>
      <CardList
      count = {count}
      setCount = {setCount}
      somme = {somme}
      setSomme = {setSomme}
      />

    </main>

    <footer>

      <Footer
      contenuFooter="FOOTER"/>

    </footer>

    </>
  )
};

export default App;
