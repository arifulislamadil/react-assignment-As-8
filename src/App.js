
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Menubar from './components/Menubar/Menubar';


function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Home></Home>
    </div>
  );
}

export default App;
