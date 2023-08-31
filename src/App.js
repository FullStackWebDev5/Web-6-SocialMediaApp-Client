import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavbarComponent from './components/NavbarComponent'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Users />
    </div>
  );
}

export default App;
