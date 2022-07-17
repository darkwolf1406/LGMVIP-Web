import { useState } from 'react';
import './App.css';
import NavBar from './components/nav';
import Records from './components/records';

function App() {

  const [users, setUsers] = useState([]);

  return (
    <div className="app">
      <NavBar setUsers={setUsers}/>
      <Records users={users}/>
    </div>
  );
}

export default App;
