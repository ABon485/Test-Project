// import { BrowserRouter , Route, Routes } from "react-router-dom";
import './layout/header/header.css';
// import './App.css'
import Header from './layout/header/header';
import Search from './layout/mainLayout/search';
import TopBody from './layout/mainLayout/body';
import FootBody from './layout/mainLayout/footBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Search/>
       <TopBody/>
       <FootBody/>
      </header>

    </div>
  );
}

export default App;
