
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Menubar from './components/Menubar/Menubar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
