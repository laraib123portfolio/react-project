import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from '../src/Components/Header'
import Banner from '../src/Components/Banner'
import Footer from '../src/Components/Footer'
import TextForm from '../src/Components/TextForm'
import { useState } from 'react';
import News from './Components/News';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

    } else {
      setMode('light');
    }
  }

  return (
    <div className="App" style={{ backgroundColor: mode === 'dark' ? 'rgb(2 10 36)' : '#ddd' }}>
      <Header title="Logo" name="Home" mode={mode} toggleMode={toggleMode}/>
      <Banner mode={mode}/>
      <TextForm heading="Popular Trends" cardTitle="Polo Shirt" mode={mode}
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnText="Add to cart"/>
      <Footer mode={mode}/>
      <News/>
    </div>
  );
}

export default App;