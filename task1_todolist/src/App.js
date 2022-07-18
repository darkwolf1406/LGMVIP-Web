import './App.css';
import NavBar from './components/nav';
import ToDoList from './components/todolist';

function App() {
  return (
    <div className="app">
      <NavBar />
      <ToDoList />
    </div>
  );
}

export default App;
